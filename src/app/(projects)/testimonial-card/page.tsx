import TestimonialCard from "@/components/testimonial-card";
import { config } from "@/utils/config";
import { Metadata } from "next";
import type { ReactNode } from "react";
import React from "react";

import thumbnail from "./assets/profile-thumbnail.webp";

export const metadata: Metadata = {
	title: `Testimonial Card | ${config.title}`,
	description:
		"A card featuring a user testimonial, including a profile image, name, username, and the testimonial body.",
};

export default function Page(): ReactNode {
	return (
		<section className="container h-dvh flex flex-col items-center py-[12.5rem]">
			<TestimonialCard
				thumbnail={{
					src: thumbnail,
					alt: "Sarah Dole Profile",
					width: 192,
					height: 1923,
				}}
				title="Sarah Dole"
				username="@sarahdole"
			>
				I&apos;ve been searching for high-quality abstract images for my design
				projects, and I&apos;m thrilled to have found this platform. The variety
				and depth of creativity are astounding!
			</TestimonialCard>
		</section>
	);
}
