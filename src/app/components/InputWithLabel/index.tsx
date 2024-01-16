import InputText from "@/app/components/Inputs/Text";
import Label from "@/app/components/Label";
import Separator from "@/app/components/Separator";
import InputSubmit from "@/app/components/Inputs/Submit";

interface InputWithLabelProps {
	labelFor: string;
	labelText: string;
	inputType: string;
	inputPlaceholder?: string;
	inputId?: string;
	inputRequired: boolean;
}

const InputWithLabel = ({
	labelFor,
	labelText,
	inputType,
	inputPlaceholder,
	inputId,
	inputRequired,
}: InputWithLabelProps) => (
	<div className="w-5/12 mx-auto mt-6 flex flex-col">
		<Label labelFor={labelFor} labelText={labelText} />
		<div className="w-full box-border">
			<InputText
				type={inputType}
				placeholder={inputPlaceholder}
				required={inputRequired}
				inputId={inputId}
			/>
			<InputSubmit submitText="Ajouter" />
		</div>
		<Separator />
	</div>
);

export default InputWithLabel;
