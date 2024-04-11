import { useEffect, useState } from "react";
import { getUser } from "./lib/users";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
	const user = await getUser();

	if (!user) {
		return (
			<main className="flex flex-row">
				<section className="w-1/2 h-screen flex flex-col justify-center items-center bg-schooner">
					<header>
						<h2 className="text-3xl font-bold text-center text-pampas py-4">
							Créer une liste de course
						</h2>
					</header>
					<article className="text-pampas">
						<ul className="list-disc">
							<li className="font-base text-sm pb-1">
								Créez une liste puis partagez là avec vos
								proches
							</li>
							<li className="font-base text-sm pb-1">
								Elle sera supprimer au bout de 24h
							</li>
							<li className="font-base text-sm pb-1">
								Vous ne pourrez plus la modifier une fois
								l&apos;onglet fermé
							</li>
						</ul>
						<Link
							href="/list/new"
							className="inline-block w-full text-center bg-merlin text-pampas py-2 px-4 mt-2 rounded-lg shadow-md"
						>
							Créer une liste
						</Link>
					</article>
				</section>
				<section className="w-1/2 h-screen flex flex-col justify-center items-center bg-pampas">
					<header>
						<h2 className="text-3xl font-bold text-center text-schooner py-4">
							Créer un compte ou Connectez-vous
						</h2>
					</header>
					<article className="text-schooner">
						<ul className="list-disc">
							<li className="font-base text-sm pb-1">
								Créez une liste puis partagez là avec vos
								proches
							</li>
							<li className="font-base text-sm pb-1">
								Elle ne sera pas supprimer
							</li>
							<li className="font-base text-sm pb-1">
								Vous pourrez la modifier autant de fois que vous
								le souhaitez
							</li>
						</ul>
						<Link
							href="/login"
							className="inline-block w-full text-center bg-merlin text-pampas py-2 px-4 mt-2 rounded-lg shadow-md"
						>
							Continuer
						</Link>
					</article>
				</section>
			</main>
		);
	} else {
		redirect("/lists");
	}
}
