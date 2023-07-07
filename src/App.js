import ImageEditor from "./components/ImageEditor"
import { useState } from "react"
import Footer from "./components/Footer"

function App() {
    const [image, setImage] = useState(null)
    const [selectedBorder, setSelectedBorder] = useState(() => {
        // Load saved border images from local storage
        const savedBorders = localStorage.getItem("customBorders")
        const initialBorder = JSON.parse(savedBorders)
        return initialBorder || null
    })

    const onImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]))
    }

    const handleBorderUpload = (e) => {
        const selectedFile = e.target.files[0]
        const reader = new FileReader()

        reader.onload = (function (f) {
            return function (e) {
                const newBorder = { imageUrl: e.target.result }
                setSelectedBorder(newBorder)

                localStorage.clear()
                localStorage.setItem("customBorders", JSON.stringify(newBorder))
            }
        })(selectedFile)

        reader.readAsDataURL(selectedFile)
    }

    return (
        //max-w-7xl
        <div className="grid h-screen place-items-center">
            <div className="card mx-auto flex bg-stone-800">
                <div className="flex flex-row">
                    <ImageEditor
                        image={image}
                        selectedBorder={selectedBorder}
                        onImageChange={onImageChange}
                        handleBorderUpload={handleBorderUpload}
                    />
                </div>
            </div>
            <div className="fixed inset-x-0 bottom-0">
                <Footer />
            </div>
        </div>
    )
}

export default App
