function ImageEditor({
    setScale,
    setRotation,
    handleDownload,
    imageScale,
    imageRotation,
    onImageChange,
    handleBorderUpload,
    handleBorderDelete,
    isBorder,
}) {
    const handleScaleSlider = (e) => {
        setScale(parseFloat(e.target.value))
    }

    const handleRotationSlider = (e) => {
        setRotation(parseFloat(e.target.value))
    }

    return (
        <>
            <div className="mt-3 grid h-full grid-cols-1 gap-4 md:max-w-xs">
                <p className="px-4 text-sm text-gray-300">
                    A simple tool to save time with Artfight thumbnails.
                    <br />
                    Exports as 200x200px, with an option to add a border too.
                    The work is done on your browser; no images get uploaded
                    anywhere!
                </p>
                <div className="m-5 mt-0 flex flex-col justify-items-center">
                    <label
                        htmlFor="image-upload"
                        id="image-button"
                        className="cursor-pointer bg-sky-700">
                        Select Image
                    </label>
                    <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={onImageChange}
                        className="hidden"
                    />
                    {isBorder ? (
                        <button
                            id="image-button"
                            className="mt-3 cursor-pointer bg-red-900 hover:!bg-red-800"
                            onClick={handleBorderDelete}>
                            Delete Border
                        </button>
                    ) : (
                        <label
                            htmlFor="custom-border-upload"
                            id="image-button"
                            className="mt-3 cursor-pointer bg-sky-700">
                            Select Border
                            <input
                                type="file"
                                id="custom-border-upload"
                                accept="image/*"
                                className="hidden"
                                onChange={handleBorderUpload}
                            />
                        </label>
                    )}

                    <div className="my-5 max-w-[70%] self-center">
                        <label htmlFor="image-scale" id="label-range">
                            Zoom
                        </label>
                        <input
                            id="image-scale"
                            type="range"
                            value={imageScale}
                            onChange={handleScaleSlider}
                            min={1}
                            max={10}
                            step={0.1}
                        />

                        <label
                            htmlFor="image-rotation"
                            id="label-range"
                            className="pt-3">
                            Rotation
                        </label>
                        <input
                            id="image-rotation"
                            type="range"
                            value={imageRotation}
                            onChange={handleRotationSlider}
                            min={0}
                            max={360}
                            step={0.1}
                        />
                    </div>
                </div>

                <div className="justify-self-center">
                    <button
                        id="image-button"
                        className="bg-sky-700"
                        onClick={handleDownload}>
                        Save Image
                    </button>
                </div>
            </div>
        </>
    )
}

export default ImageEditor
