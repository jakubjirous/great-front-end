import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import type { ReactNode } from "react";

export default function TestimonialCard({
	thumbnail: { src, alt, width, height },
	title,
	username,
	children,
}: {
	thumbnail: {
		src: string | StaticImport;
		alt: string;
		width: number;
		height: number;
	};
	title: string;
	username: string;
	children?: ReactNode;
}): ReactNode {
	return (
		<div className="w-[21.25rem] flex flex-col gap-4 bg-white p-6 rounded-lg shadow-testimonial-card">
			<div className="grid grid-cols-[3rem,1fr] items-center gap-4 self-stretch">
				<div className="w-12 h-12 rounded-full overflow-clip">
					<Image
						alt={alt}
						className="w-full h-full object-cover"
						height={height}
						placeholder="blur"
						src={src}
						width={width}
					/>
				</div>
				<div className="flex flex-col gap-px flex-grow w-full truncate">
					<h1 className="font-semibold text-lg text-justify text-neutral-900 truncate">
						{title}
					</h1>
					<h2 className="font-normal text-sm text-neutral-600 truncate">
						{username}
					</h2>
				</div>
			</div>
			<p className="font-normal text-base text-neutral-600 line-clamp-5">
				{children}
			</p>
		</div>
	);
}
