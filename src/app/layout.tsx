import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export const metadata: Metadata = {
	title: "Liste de course partagé",
	description: "Créer une liste de course et partagé la avec vos amis",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr">
			<body className={`${montserrat.variable} font-sans bg-white`}>
				{children}
			</body>
		</html>
	);
}
