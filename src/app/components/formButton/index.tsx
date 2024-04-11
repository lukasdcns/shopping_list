import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { useFormStatus } from "react-dom";

interface ButtonProps {
	type: DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>["type"];
}

export default function FormButton({ type }: ButtonProps) {
	const formStatus = useFormStatus();

	return (
		<button
			type={type}
			disabled={formStatus.pending}
			className="w-full bg-merlin text-pampas py-2 px-4 rounded-lg shadow-md"
		>
			{formStatus.pending ? "Submitting..." : "Sign in"}
		</button>
	);
}
