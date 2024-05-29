import { useRef, useState, useEffect } from "react";
import AvatarEditor from "react-avatar-editor";
import ImageSettings from "./ImageSettings";

function ImageEditor({
  image,
  selectedBorder,
  onImageChange,
  handleBorderUpload,
  handleBorderDelete,
  isImageSet,
}) {
  const editor = useRef(null);
  const [imageScale, setImageScale] = useState(1);
  const [imageRotation, setImageRotation] = useState(0);
  const [dimensions, setDimensions] = useState(0);
  const maxWidth = 500;

  // Calculate the size for the avatar editor
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const maxScaledWidth =
        windowWidth * 0.8 > maxWidth ? maxWidth : windowWidth * 0.8;

      setDimensions(maxScaledWidth);
    };

    // Call this once
    handleResize();
    // And add a listener
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  const onMouseWheel = (e) => {
    const { deltaY } = e;
    setImageScale(clamp(imageScale + deltaY * 0.003 * -1, 1, 10));
  };

  const handleDownload = (e) => {
    let resizedCanvas = document.createElement("canvas");
    let resizedContext = resizedCanvas.getContext("2d");

    resizedCanvas.height = "200";
    resizedCanvas.width = "200";

    const canvas = document.getElementById("main-canvas");
    resizedContext.drawImage(canvas, 0, 0, 200, 200);

    const border = document.getElementById("border-image");
    if (border) {
      resizedContext.drawImage(border, 0, 0, 200, 200);
    }

    let downloadLink = document.createElement("a");
    downloadLink.setAttribute("download", "thumbnail.png");

    resizedCanvas.toBlob(function (blob) {
      let url = URL.createObjectURL(blob);
      downloadLink.setAttribute("href", url);
      downloadLink.click();
    });
  };

  return (
    <div className="flex w-full flex-col content-center md:flex-row">
      <div className="basis-1 p-2 md:basis-1/2 md:p-4">
        <ImageSettings
          setScale={setImageScale}
          setRotation={setImageRotation}
          handleDownload={handleDownload}
          imageScale={imageScale}
          imageRotation={imageRotation}
          onImageChange={onImageChange}
          handleBorderUpload={handleBorderUpload}
          handleBorderDelete={handleBorderDelete}
          isBorder={selectedBorder}
        />
      </div>
      <div className="m-3 flex basis-1 items-center justify-center md:basis-1/2">
        <div className="image-with-border relative w-full max-w-full">
          <AvatarEditor
            id="main-canvas"
            ref={editor}
            image={image}
            width={dimensions}
            height={dimensions}
            border={2}
            color={[0, 0, 0, 1]}
            scale={isImageSet ? imageScale : 1}
            rotate={isImageSet ? imageRotation : 0}
            disableBoundaryChecks={isImageSet}
            onWheel={onMouseWheel}
            className="w-full"
          />
          {selectedBorder && (
            <div
              className="pointer-events-none absolute left-0 top-0 h-full w-full"
              style={{
                maxWidth: dimensions + 100,
                maxHeight: dimensions + 100,
              }}>
              <img
                id="border-image"
                src={selectedBorder.imageUrl}
                alt="Selected Border"
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageEditor;
