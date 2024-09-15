import { ProjectType } from "@/data/projects";
import { sizes } from "@/utils/shared";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

export function ProjectCard({
	project: {
		title,
		description,
		href,
		thumbnail: { src, alt },
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
			<figure className="relative h-50 aspect-video overflow-clip">
				<Image
					src={src}
					alt={alt}
					placeholder="blur"
					sizes={sizes}
					fill
					className="aspect-video group-hover:scale-110 transition-all duration-500"
				/>
			</figure>

			<div className="px-5 py-4">
				<h2 className="mb-3 text-lg font-semibold">{title}</h2>
				<p className="m-0 text-sm opacity-50 text-pretty">{description}</p>
			</div>
		</Link>
	);
}
