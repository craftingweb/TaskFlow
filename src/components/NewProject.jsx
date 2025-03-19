import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescripton = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescripton.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescripton,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2>Wrong Input</h2>{" "}
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="">
          <li className="flex gap-8 justify-end mb-8">
            <button className="text-stone-600 hover:text-stone-950">
              Close
            </button>
            <button
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-stone-800 hover:text-stone-100"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
          <div>
            <Input ref={title} label="Title" />
            <Input ref={description} label="Description" textarea />
            <Input type="date" ref={dueDate} label="Due Date" />
          </div>
        </menu>
      </div>
    </>
  );
}
