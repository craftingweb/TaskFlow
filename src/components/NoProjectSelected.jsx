import logo from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={logo} className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-stone-500 my-4 font-bold text-xl">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or start with a new one
      </p>
      <p>
        <Button>Create a new project</Button>
      </p>
    </div>
  );
}
