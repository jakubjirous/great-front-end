import BlogCard from "@/components/blog-card";
import { config } from "@/utils/config";
import { Metadata } from "next";
import type { ReactNode } from "react";
import React from "react";

import livingRoom from "./assets/living-room.webp";

export const metadata: Metadata = {
	title: `Blog Card | ${config.title}`,
	description: "A simple blog card displaying details of a blog article.",
};

export default function Page(): ReactNode {
	return (
		<section className="container h-dvh flex flex-col items-center pt-[7.5rem]">
			<BlogCard
				thumbnail={{
					src: livingRoom,
					alt: "Living room",
				}}
				tag="Interior"
				title="Top 5 Living Room Inspirations"
				href="/"
			>
				Curated vibrants colors for your living, make it pop & calm in the same
				time.
			</BlogCard>
		</section>
	);
}
