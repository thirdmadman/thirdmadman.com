import { PROJECTS } from '@/constants';
import { BasicPageLayout } from '@/shared/ui/basic-page-layout';
import { PageHeader } from '@/shared/ui/header';
import { ProjectCard } from '@/shared/ui/project-card';

export function ProjectsPage() {
  return (
    <div className="pt-[65px]">
      <PageHeader title={'Projects page'} />
      <BasicPageLayout>
        <div className="flex flex-col items-center min-h-screen text-neutral-700 dark:text-neutral-200">
          {PROJECTS.map((project) => {
            return (
              <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                sourceCodeLink={project.sourceCodeLink}
                link={project.link}
              />
            );
          })}
        </div>
      </BasicPageLayout>
    </div>
  );
}
