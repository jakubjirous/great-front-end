import { config } from "@/utils/config";
import { footerLink } from "@/utils/shared";
import Link from "next/link";

export default function Footer() {
	return (
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
	);
}
