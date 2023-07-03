// Function to convert image to base64
export function convertImageToBase64(imageSource, callback) {
	const image = new Image();

	image.onload = function () {
		const canvas = document.createElement("canvas");
		canvas.width = image.width;
		canvas.height = image.height;

		const context = canvas.getContext("2d");
		context.drawImage(image, 0, 0);

		// Convert canvas to base64
		const base64Data = canvas.toDataURL("image/png");
		return base64Data;
	};
}
