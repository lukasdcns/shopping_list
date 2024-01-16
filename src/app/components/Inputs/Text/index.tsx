interface InputTextProps {
	type: string;
	placeholder?: string;
	required: boolean;
	inputId?: string;
}

const InputText = ({
	type,
	placeholder,
	required,
	inputId,
}: InputTextProps) => (
	<input
		className="border border-r-0 w-10/12 rounded p-2 rounded-r-none box-border"
		name={inputId}
		type={type}
		placeholder={placeholder}
		id={inputId}
		required={required}
	/>
);

export default InputText;
