import FormButton from "../formButton";

interface FormProps {
	buttonText: string;
	placeholder?: string;
	formAction: any;
	state: any;
}

export default function LoginForm({
	buttonText,
	formAction,
	state,
	placeholder,
}: FormProps) {
	return (
		<form action={formAction} className="w-full">
			{state.message && (
				<p
					aria-live="polite"
					className="text-center text-red-800 font-bold py-2"
				>
					{state.message}
				</p>
			)}

			<input
				type="email"
				name="email"
				className="border rounded-lg px-3 py-2 text-sm w-full mb-4 text-merlin"
				placeholder={placeholder}
			/>

			<FormButton text={buttonText} type="submit" />
		</form>
	);
}
