import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import { config } from "@/utils/config";

export default function Page() {
	return (
		<main className="bg-custom-gradient">
			<section className="container h-dvh grid grid-cols-1 grid-rows-[12.5rem,1fr] items-center gap-8">
				<h1 className="text-neutral-900 font-semibold text-2xl text-pretty text-center">
					{config.title} Projects
				</h1>

				<div className="h-full columns-2 tablet:columns-3 desktop:columns-4 gap-4 tablet:gap-6 desktop:gap-8">
					{projects.map((project) => (
						<ProjectCard
							key={project.href}
							project={project}
							className="mb-4 tablet:mb-6 desktop:mb-8"
						/>
					))}
				</div>
			</section>
		</main>
	);
}
