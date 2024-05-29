import ImageEditor from "./components/ImageEditor";
import { useState } from "react";
import Footer from "./components/Footer";
import PlaceholderImage from "./assets/placeholder.jpg";

function App() {
  const [image, setImage] = useState(PlaceholderImage);
  const [isImageSet, setisImageSet] = useState(false);

  const [selectedBorder, setSelectedBorder] = useState(() => {
    // Load saved border images from local storage
    const savedBorders = localStorage.getItem("customBorders");
    const initialBorder = JSON.parse(savedBorders);
    return initialBorder || null;
  });

  const onImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    setisImageSet(true);
  };

  const handleBorderUpload = (e) => {
    const selectedFile = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (function (f) {
      return function (e) {
        const newBorder = { imageUrl: e.target.result };
        setSelectedBorder(newBorder);

        localStorage.clear();
        localStorage.setItem("customBorders", JSON.stringify(newBorder));
      };
    })(selectedFile);

    reader.readAsDataURL(selectedFile);
  };

  const handleBorderDelete = () => {
    localStorage.clear();
    setSelectedBorder(null);
  };

  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 lg:pt-6">
      <div className="grid flex-grow place-items-center">
        <div className="card mx-auto flex w-full max-w-full flex-col bg-stone-800 md:max-w-3xl lg:max-w-4xl lg:p-8">
          <div className="flex flex-col md:flex-row">
            <ImageEditor
              image={image}
              selectedBorder={selectedBorder}
              onImageChange={onImageChange}
              handleBorderUpload={handleBorderUpload}
              handleBorderDelete={handleBorderDelete}
              isImageSet={isImageSet}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
