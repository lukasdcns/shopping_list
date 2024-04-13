"use client";
import { handleLoginFormSubmit } from "@/app/lib/actions";
import FormButton from "../formButton";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import Header from "./header";
import LoginForm from "./loginForm";

const initialState = {
	message: "",
	data: null,
};

export default function Login() {
	const [state, formAction] = useFormState(
		handleLoginFormSubmit,
		initialState,
	);

	return (
		<article className="h-2/3 bg-tide text-pampas shadow-2xl rounded-md py-8 px-12 mt-4">
			{!state.data && (
				<LoginForm
					buttonText="Connexion"
					formAction={formAction}
					state={state}
				/>
			)}
			{state.data && (
				<p className="text-center font-semibold text-sm text-merlin">
					{state.message}
				</p>
			)}
		</article>
	);
}
