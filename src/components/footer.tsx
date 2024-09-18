import { config } from "@/utils/config";
import Link from "next/link";

const linkStyles =
	"font-semibold text-neutral-700 duration-500 transition-all border-solid border-b border-b-transparent hover:border-neutral-700";

export default function Footer() {
	return (
		<footer className="fixed bottom-0 text-xs flex justify-center w-full p-4 text-neutral-500 bg-transparent backdrop-blur-md gap-0.5">
			<span>A challenge by</span>
			<Link
				target="_blank"
				rel="no-follow"
				href={config.hrefGEF}
				className={linkStyles}
			>
				GreatFrontEnd Projects
			</Link>
			<span className="px-1">|</span>
			<span>Built by</span>
			<Link
				target="_blank"
				rel="no-follow"
				href={config.hrefJJ}
				className={linkStyles}
			>
				Jakub Jirous
			</Link>
		</footer>
	);
}
