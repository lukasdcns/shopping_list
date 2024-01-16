import Image from "next/image";
import Banner from "@/app/components/Banner";
import InputWithLabel from "@/app/components/InputWithLabel";
import { FormEvent } from "react";

export default function App() {
	async function AddCourseItem(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		let currentDate = new Date();

		const formData = new FormData(event.currentTarget);
		formData.append("created_date", Date.now());
		const response = await fetch("/api/submit", {
			method: "POST",
			body: formData,
		});

		// Handle response if necessary
		const data = await response.json();
		// ...
	}

	return (
		<main>
			<Banner title="Courses" />
			<form onSubmit={AddCourseItem} className="w-full">
				<InputWithLabel
					labelFor="addCourseItem"
					labelText="Ajouter une course"
					inputType="text"
					inputPlaceholder="Chocolats"
					inputId="addCourseItem"
					inputRequired={true}
				/>
			</form>
		</main>
	);
}
