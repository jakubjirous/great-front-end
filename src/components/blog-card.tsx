import { sizes } from "@/utils/shared";
import { ArrowRight } from "lucide-react";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export default function BlogCard({
	thumbnail: { src, alt },
	title,
	tag,
	href,
	children,
}: {
	thumbnail: {
		src: string | StaticImport;
		alt: string;
	};
	title: string;
	tag: string;
	href: string;
	children?: ReactNode;
}): ReactNode {
	return (
		<article
			role="article"
			aria-labelledby="article-title"
			className="w-[21.25rem] flex flex-col rounded-lg shadow-blog-card overflow-clip"
		>
			<figure className="relative h-72">
				<Image src={src} alt={alt} fill placeholder="blur" sizes={sizes} />
			</figure>
			<div className="flex flex-col bg-white px-4 py-6 gap-3">
				<header className="flex flex-col gap-2">
					<div className="flex max-w-max items-center bg-green-50 px-2 py-0.5 rounded-full border border-solid border-green-200">
						<span className="font-normal text-sm text-center text-green-700">
							{tag}
						</span>
					</div>
					<h1
						id="article-title"
						className="font-semibold text-lg text-neutral-900 truncate"
					>
						{title}
					</h1>
				</header>
				<section className="flex flex-col gap-6">
					<p className="font-medium text-base text-neutral-600 line-clamp-2">
						{children}
					</p>
					<footer className="inline-flex">
						<Link
							href={href}
							aria-label="Read more about this article"
							className="flex items-center justify-start gap-1.5 rounded group duration-500 transition-all focus-visible:ring-indigo-500/50"
						>
							<span className="font-medium text-base text-indigo-700 px-0.5 group-hover:text-indigo-600 duration-500 transition-all">
								Read more
							</span>
							<ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 duration-500 transition-all group-hover:text-indigo-600" />
						</Link>
					</footer>
				</section>
			</div>
		</article>
	);
}
