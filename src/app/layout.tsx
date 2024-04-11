import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Shared Shopping List",
	description: "Create and share shopping lists with your friends and family",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={font.className + " bg-pampas h-screen"}>
				{children}
			</body>
		</html>
	);
}
