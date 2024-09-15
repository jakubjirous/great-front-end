import { ReactNode } from "react";

export default function ProjectsLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return <main className="bg-custom-gradient">{children}</main>;
}
