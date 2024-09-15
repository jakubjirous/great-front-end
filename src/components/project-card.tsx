import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

export interface ProjectType {
	title: string;
	description: string;
	href: string;
	thumbnail: {
		src: string | StaticImport;
		alt: string;
		width: number;
		height: number;
	};
}

export function ProjectCard({
	project: {
		title,
		description,
		href,
		thumbnail: { src, alt, width, height },
	},
	className,
	...rest
}: {
	project: ProjectType;
	className?: string;
	rest?: CSSProperties;
}): ReactNode {
	return (
		<Link
			href={href}
			className={`group flex break-inside-avoid flex-col group rounded-lg border border-neutral-200 bg-neutral-100 transition-all duration-500 hover:border-neutral-400 overflow-clip ${className}`}
			{...rest}
		>
			<div>
				<Image
					alt={alt}
					height={height}
					placeholder="blur"
					src={src}
					width={width}
					className="aspect-video group-hover:scale-110 transition-all duration-500"
				/>

				<div className="px-5 py-4">
					<h2 className="mb-3 text-lg font-semibold">{title}</h2>
					<p className="m-0 max-w-[30ch] text-sm opacity-50">{description}</p>
				</div>
			</div>
		</Link>
	);
}
