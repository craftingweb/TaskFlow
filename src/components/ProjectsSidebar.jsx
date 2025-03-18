export default function ProjectsSidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-200 rounded-r-xl md: w-72">
      <h2 className="uppercase mb-8 font-bold md: text-xl">Your Projects</h2>
      <div>
        <button className="text-sm md:text-base px-4 py-2 bg-stone-600 rounded-lg text-stone-400 hover:bg-stone-700 hover:text-stone-200">
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}
