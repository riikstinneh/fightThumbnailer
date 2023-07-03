import Button from "./Button";

function ImageEditor({
	setScale,
	setRotation,
	handleDownload,
	imageScale,
	imageRotation,
	onImageChange,
	handleBorderUpload,
}) {
	const handleScaleSlider = (e) => {
		setScale(parseFloat(e.target.value));
	};

	const handleRotationSlider = (e) => {
		setRotation(parseFloat(e.target.value));
	};

	return (
		<>
			<div className="grid grid-cols-1 gap-4 content-center h-full md:max-w-xs">
				<div className="m-5 flex flex-col justify-items-center">
					<label
						htmlFor="image-upload"
						id="image-button"
						className="cursor-pointer"
					>
						Select Main Image
					</label>
					<input
						id="image-upload"
						type="file"
						accept="image/*"
						onChange={onImageChange}
						className="hidden"
					/>
					<label
						htmlFor="custom-border-upload"
						id="image-button"
						className="cursor-pointer mt-3"
					>
						Select Border Image
						<input
							type="file"
							id="custom-border-upload"
							accept="image/*"
							className="hidden"
							onChange={handleBorderUpload}
						/>
					</label>

					<div className="max-w-[70%] self-center mt-5">
						<label htmlFor="image-scale" id="label-range">Zoom</label>
						<input
							id="image-scale"
							type="range"
							value={imageScale}
							onChange={handleScaleSlider}
							min={1}
							max={10}
							step={0.1}
						/>

						<label htmlFor="image-rotation" id="label-range">Rotation</label>
						<input
							id="image-rotation"
							type="range"
							value={imageRotation}
							onChange={handleRotationSlider}
							min={1}
							max={360}
							step={0.1}
						/>
					</div>
				</div>


				<div className="justify-self-center">
					<Button danger rounded id="save-button" onClick={handleDownload}>
						Save Image
					</Button>
				</div>

			</div>

		</>
	);
}

export default ImageEditor;
