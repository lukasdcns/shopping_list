"use client";
import { redirect, useRouter } from "next/navigation";
import LoginForm from "./components/login/loginForm";
import { handleLoginFormSubmit } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { getUser } from "./lib/users";
import { useEffect, useState } from "react";
import Link from "next/link";

const initialState = {
	message: "",
	data: null,
};

export default function Home() {
	const router = useRouter();
	const [user, setUser] = useState();
	const searchUser = async () => {
		return await getUser();
	};

	useEffect(() => {
		searchUser().then((user) => setUser(user));
	}, []);

	const [state, formAction] = useFormState(
		handleLoginFormSubmit,
		initialState,
	);

	if (!user) {
		return (
			<>
				{!state.data ? (
					<main>
						<header>
							<h1 className="text-3xl font-bold text-center text-merlin py-4 mt-10">
								Liste de course partagée
							</h1>
							<p className="text-merlin text-center">
								<strong className="font-medium">
									Créez une liste de courses et partagez-la
									avec vos proches.
								</strong>
							</p>
						</header>
						<div className="w-1/4 mt-6 mx-auto flex flex-col justify-center items-center">
							<LoginForm
								buttonText="Continuer"
								placeholder="Entrez votre adresse email"
								formAction={formAction}
								state={state}
							/>
							<Link
								href="list/new"
								className="font-light text-merlin mx-auto text-sm mt-2 transition"
							>
								<span className="underline-effect">
									Ou continuez sans compte
								</span>
							</Link>
						</div>
					</main>
				) : (
					<div className="h-screen w-screen flex justify-center items-center">
						<div className="w-1/4mx-auto bg-schooner py-10 rounded-lg shadow-md px-6">
							<p className="text-center font-semibold text-sm text-pampas">
								{state.message}
							</p>
						</div>
					</div>
				)}
			</>
		);
	} else {
		router.push("/lists");
	}
}
