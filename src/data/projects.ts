import { ProjectType } from "@/components/project-card";
import testimonialCard from "../../public/assets/testimonial-card.webp";

export const projects: ProjectType[] = [
	{
		title: "Testimonial Card",
		description: "A simple user testimonial card with key testimonial elements",
		href: "/testimonial-card",
		thumbnail: {
			src: testimonialCard,
			alt: "Testimonial Card",
			width: 2061,
			height: 1161,
		},
	},
];
