import FormButton from "../formButton";

interface FormProps {
	formAction: any;
	state: any;
}

export default function Form({ formAction, state }: FormProps) {
	return (
		<form action={formAction}>
			<label className="font-semibold text-sm text-merlin pb-1">
				E-mail adress
			</label>
			<input
				type="email"
				name="email"
				className="border rounded-lg px-3 py-2 mt-1 text-sm w-full text-merlin"
			/>
			<p aria-live="polite" className="text-center py-2 mb-2">
				{state.message}
			</p>
			<FormButton type="submit" />
		</form>
	);
}
