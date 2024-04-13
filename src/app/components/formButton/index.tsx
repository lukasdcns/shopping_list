import { ButtonHTMLAttributes, DetailedHTMLProps, ReactHTML } from "react";
import { useFormStatus } from "react-dom";
import Spinner from "../spinner";

interface ButtonProps {
	text: string;
	type: DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>["type"];
}

export default function FormButton({ type, text }: ButtonProps) {
	const formStatus = useFormStatus();

	return (
		<>
			<button
				type={type}
				disabled={formStatus.pending}
				className="w-full bg-schooner text-pampas py-2 px-4 rounded-lg shadow-md"
			>
				{formStatus.pending ? <Spinner /> : text}
			</button>
		</>
	);
}
