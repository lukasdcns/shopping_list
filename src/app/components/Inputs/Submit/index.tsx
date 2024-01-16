interface InputSubmitProps {
	submitText: string;
}

const InputSubmit = ({ submitText }: InputSubmitProps) => (
	<button
		className="bg-indigo-900 py-2 px-4 rounded rounded-l-none text-white w-2/12 drop-shadow-md box-border border border-l-0"
		type="submit"
	>
		{submitText}
	</button>
);

export default InputSubmit;
