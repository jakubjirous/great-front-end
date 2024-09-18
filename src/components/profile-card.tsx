import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

export type SocialType = {
	title: string;
	href: string;
	svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export default function ProfileCard({
	avatar,
	name,
	position,
	href,
	socials,
	children,
}: {
	avatar: {
		src: string | StaticImport;
		alt: string;
	};
	name: string;
	position: string;
	href: string;
	socials: SocialType[];
	children?: ReactNode;
}): ReactNode {
	return (
		<article
			aria-labelledby="profile-name"
			className="w-[21.25rem] flex flex-col gap-10 bg-white py-6 px-4 rounded-lg shadow-card"
		>
			<section className="flex flex-col items-center gap-6">
				<figure className="w-16 h-16 rounded-full overflow-clip">
					<Image
						src={avatar.src}
						alt={avatar.alt}
						placeholder="blur"
						className="w-full h-full object-cover"
					/>
				</figure>
				<div className="flex flex-col items-center text-center gap-1 w-full">
					<h1
						id="profile-name"
						className="font-medium text-xl text-neutral-900 truncate w-full"
					>
						{name}
					</h1>
					<h2 className="font-normal text-sm text-neutral-600 truncate w-full">
						{position}
					</h2>
				</div>
				<p className="font-normal text-base text-neutral-600 line-clamp-3 text-center">
					{children}
				</p>
			</section>
			<footer className="flex flex-col justify-center gap-6">
				<Link
					href={href}
					aria-label="Contact me"
					className="flex justify-center items-center px-6 py-2.5 bg-indigo-700 rounded transition-all duration-500 hover:bg-indigo-800"
				>
					<span className="font-noto text-base text-white font-medium">
						Contact me
					</span>
				</Link>
				<div className="flex justify-center gap-4">
					{socials.map(({ title, href, svg: SvgIcon }) => (
						<Link
							key={title}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`${title} (opens in a new tab)`}
							className="p-2 transition-all duration-500 group rounded"
						>
							<SvgIcon className="fill-indigo-700 w-5 h-5 group-hover:fill-indigo-800" />
						</Link>
					))}
				</div>
			</footer>
		</article>
	);
}
