"use client";
import { useState } from "react";
import Login from "../components/login";
import Header from "../components/login/header";

export default function Page() {
	return (
		<main className="flex flex-row">
			<section className="w-screen h-screen flex justify-center items-center">
				<div className="flex flex-col w-1/3">
					<Header />
					<Login />
				</div>
			</section>
		</main>
	);
}
