import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-200 rounded-r-xl md: w-72">
      <h2 className="uppercase mb-8 font-bold md: text-xl">Your Projects</h2>
      <div>
        <Button
          className="text-sm md:text-base px-4 py-2 bg-stone-600 rounded-lg text-stone-400 hover:bg-stone-700 hover:text-stone-200"
          onClick={onStartAddProject}
        >
          + Add Project
        </Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
