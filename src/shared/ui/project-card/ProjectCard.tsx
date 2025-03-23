interface IProjectCard {
  name: string;
  description: string;
  sourceCodeLink: string;
  link: string;
}

export function ProjectCard({ name, description, sourceCodeLink, link }: IProjectCard) {
  return (
    <div
      key={name}
      className="flex flex-col items-center justify-center m-4 p-4 border-2 border-neutral-400 dark:border-neutral-400 rounded-lg gap-3 w-full"
    >
      <h2 className="text-xl">{name}</h2>
      <p className="text-sm">{description}</p>
      <div className="flex flex-row justify-center items-center m-2 gap-4">
        <a href={sourceCodeLink} className="text-sm mr-2">
          Source code
        </a>
        <a href={link} className="text-sm">
          Live demo
        </a>
      </div>
    </div>
  );
}
