import { useRef, useState } from "react"
import AvatarEditor from "react-avatar-editor"
import ImageSettings from "./ImageSettings"

function ImageEditor({
    image,
    selectedBorder,
    onImageChange,
    handleBorderUpload,
}) {
    const editor = useRef(null)
    const [imageScale, setImageScale] = useState(1)
    const [imageRotation, setImageRotation] = useState(0)

    const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

    const onMouseWheel = (e) => {
        const { deltaY } = e
        setImageScale(clamp(imageScale + deltaY * 0.003 * -1, 1, 10))
    }

    const handleDownload = (e) => {
        var resizedCanvas = document.createElement("canvas")
        var resizedContext = resizedCanvas.getContext("2d")

        resizedCanvas.height = "200"
        resizedCanvas.width = "200"

        const canvas = document.getElementById("main-canvas")
        resizedContext.drawImage(canvas, 0, 0, 200, 200)

        const border = document.getElementById("border-image")
        if (border) {
            resizedContext.drawImage(border, 0, 0, 200, 200)
        }

        let downloadLink = document.createElement("a")
        downloadLink.setAttribute("download", "thumbnail.png")

        resizedCanvas.toBlob(function (blob) {
            let url = URL.createObjectURL(blob)
            downloadLink.setAttribute("href", url)
            downloadLink.click()
        })
    }

    return (
        <div className="flex flex-col content-center md:w-full md:flex-row">
            <div className="basis-1 md:basis-1/2">
                <ImageSettings
                    setScale={setImageScale}
                    setRotation={setImageRotation}
                    handleDownload={handleDownload}
                    imageScale={imageScale}
                    imageRotation={imageRotation}
                    onImageChange={onImageChange}
                    handleBorderUpload={handleBorderUpload}
                />
            </div>
            <div className="m-3 basis-1 md:basis-1/2">
                <div className="image-with-border relative">
                    <AvatarEditor
                        id="main-canvas"
                        ref={editor}
                        image={image}
                        width={500}
                        height={500}
                        border={0}
                        color={[130, 130, 130, 0.8]} // RGBA
                        scale={imageScale}
                        rotate={imageRotation}
                        disableBoundaryChecks={true}
                        onWheel={onMouseWheel}
                    />
                    {selectedBorder && (
                        <div
                            className="pointer-events-none absolute left-0 top-0 h-full w-full"
                            style={{ maxWidth: "600px", maxHeight: "600px" }}>
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
    )
}

export default ImageEditor
