import Footer from "@/components/footer";
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
				<Footer />
			</body>
		</html>
	);
}
