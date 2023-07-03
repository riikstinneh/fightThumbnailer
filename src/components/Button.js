import className from "classnames";

function Button({
	children,
	primary,
	secondary,
	success,
	warning,
	danger,
	outline,
	rounded,
	...rest
}) {
	const classes = className(
		"px-3 py-1.5 border focus:outline-none focus:ring-4",
		{
			"border-blue-500 bg-blue-500 hover:bg-blue-600 text-white": primary,
			"border-gray-900 bg-gray-900 hover:bg-gray-800 text-white": secondary,
			"border-green-700 bg-green-700 hover:bg-green-800 text-white": success,
			"border-yellow-400 bg-yellow-400 hover:bg-yellow-500 text-white": warning,
			"border-red-500 bg-red-500 hover:bg-red-600 text-white": danger,
			"rounded-full": rounded,
			"bg-white": outline,
			"text-blue-500": outline && primary,
			"text-gray-900": outline && secondary,
			"text-green-500": outline && success,
			"text-yellow-400": outline && warning,
			"text-red-500": outline && danger,
		}
	);

	return <button {...rest} className={classes}>{children}</button>;
}

Button.propTypes = {
	checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
		const count =
			Number(!!primary) +
			Number(!!secondary) +
			Number(!!warning) +
			Number(!!success) +
			Number(!!danger);

		if (count > 1) {
			return new Error(
				"Only one of primary, secondary, success, warning, danger can be true"
			);
		}
	},
};

export default Button;
