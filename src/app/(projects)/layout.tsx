import { ReactNode } from "react";

export default function ProjectsLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<main className="bg-gradient-to-b from-gray-50 to-iron-500">
			{children}
		</main>
	);
}
