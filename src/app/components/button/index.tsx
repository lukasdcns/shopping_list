"use Client";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps {
	handleClick?: any;
	children?: React.ReactNode;
	type?: DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>["type"];
}

export default function Button({ handleClick, type, children }: ButtonProps) {
	return (
		<button
			onClick={handleClick}
			type={type}
			className="w-full bg-merlin text-pampas py-2 px-4 mt-2 rounded-lg shadow-md"
		>
			{children}
		</button>
	);
}
