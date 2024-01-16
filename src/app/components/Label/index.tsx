interface LabelProps {
	labelFor: string;
	labelText: string;
}

const Label = ({ labelFor, labelText }: LabelProps) => (
	<label
		className="text-base font-sans font-medium pb-1.5"
		htmlFor={labelFor}
	>
		{" "}
		{labelText}
	</label>
);

export default Label;
