import ProfileCard, { SocialType } from "@/components/profile-card";
import { config } from "@/utils/config";
import { Metadata } from "next";
import type { ReactNode } from "react";
import React from "react";

import Github from "./assets/github.svg";
import Instagram from "./assets/instagram.svg";
import LinkedIn from "./assets/linkedin.svg";
import sarahDole from "./assets/sarah-dole.webp";
import TwitterX from "./assets/twitter-x.svg";

export const metadata: Metadata = {
	title: `Profile Card | ${config.title}`,
	description:
		"A simple profile card featuring a user's basic information and links to their social media profiles.",
};

const socials: SocialType[] = [
	{
		title: "GitHub",
		href: "https://www.github.com/",
		svg: Github,
	},
	{
		title: "LinkedIn",
		href: "https://www.linkedin.com/",
		svg: LinkedIn,
	},
	{
		title: "Instagram",
		href: "https://www.instagram.com/",
		svg: Instagram,
	},
	{
		title: "Twitter/X",
		href: "https://wwww.x.com/",
		svg: TwitterX,
	},
];

export default function Page(): ReactNode {
	return (
		<section className="container h-dvh flex flex-col items-center pt-[12.5rem]">
			<ProfileCard
				avatar={{
					src: sarahDole,
					alt: "Sarah Dole",
				}}
				name="Sarah Dole"
				position="Front End Engineer @ Microsoft"
				href="/"
				socials={socials}
			>
				I turn coffee into bugs which are fixed by someone else. Certified Stack
				Overflow and ChatGPT developer.
			</ProfileCard>
		</section>
	);
}
