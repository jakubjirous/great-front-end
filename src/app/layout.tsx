import { config } from "@/utils/config";
import { footerLink } from "@/utils/shared";
import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans as NotoSans } from "next/font/google";
import Link from "next/link";
import { ReactNode } from "react";

const noto = NotoSans({
	subsets: ["latin"],
	variable: "--font-noto",
	weight: ["400", "600"],
});

export const metadata: Metadata = {
	title: `Projects | ${config.title}`,
	description: config.description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${noto.variable} antialiased`}>
				{children}
				<footer className="fixed bottom-0 text-xs flex justify-center w-full p-4 text-neutral-500 bg-transparent backdrop-blur-md">
					A challenge by{" "}
					<Link
						target="_blank"
						rel="no-follow"
						href={config.hrefGEF}
						className={footerLink}
					>
						GreatFrontEnd Projects
					</Link>
					. Built by{" "}
					<Link
						target="_blank"
						rel="no-follow"
						href={config.hrefJJ}
						className={footerLink}
					>
						Jakub Jirous
					</Link>
					.
				</footer>
			</body>
		</html>
	);
}
