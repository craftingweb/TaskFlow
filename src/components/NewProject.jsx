import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="">
        <li className="flex gap-8 justify-end mb-8">
          <button className="text-stone-600 hover:text-stone-950">Close</button>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-stone-800 hover:text-stone-100">
            Save
          </button>
        </li>
        <div>
          <Input label="Title" />
          <Input label="Description" textarea />
          <Input label="Due Date" />
        </div>
      </menu>
    </div>
  );
}
