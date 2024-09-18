import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import blogCard from "../../public/assets/blog-card.webp";
import profileCard from "../../public/assets/profile-card.webp";
import testimonialCard from "../../public/assets/testimonial-card.webp";

export interface ProjectType {
	title: string;
	description: string;
	href: string;
	thumbnail: {
		src: string | StaticImport;
		alt: string;
	};
}

export const projects: ProjectType[] = [
	{
		title: "Profile Card",
		description:
			"A simple profile card that includes a profile picture, name, title, links to social media profiles, and a call-to-action (CTA) button.",
		href: "/profile-card",
		thumbnail: {
			src: profileCard,
			alt: "Profile Card",
		},
	},
	{
		title: "Blog Card",
		description:
			"A blog card featuring editorial content, including an article cover image, a content category tag, a title, a brief description, and a call-to-action (CTA) link.",
		href: "/blog-card",
		thumbnail: {
			src: blogCard,
			alt: "Blog Card",
		},
	},
	{
		title: "Testimonial Card",
		description:
			"A simple user testimonial card with key testimonial elements.",
		href: "/testimonial-card",
		thumbnail: {
			src: testimonialCard,
			alt: "Testimonial Card",
		},
	},
];
