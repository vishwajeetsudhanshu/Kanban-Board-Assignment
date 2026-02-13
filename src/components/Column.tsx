import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import type { Status } from "../types/task";
import { useStore } from "../store/useStore";
import TaskCard from "./TaskCard";

interface Props {
  status: Status;
  title: string;
}

export default function Column({ status, title }: Props) {
  const tasks = useStore((state) => state.tasks);
  const addTask = useStore((state) => state.addTask);

  const { setNodeRef, isOver } = useDroppable({
    id: status,
  });

  // filter tasks for this column
  const list = tasks.filter((task) => task.status === status);

  // local state for adding task
  const [showInput, setShowInput] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");

  const handleAdd = () => {
    if (!titleInput.trim()) return;

   addTask({
  title: titleInput,
  description: descInput,
  status: status,
});

    setTitleInput("");
    setDescInput("");
    setShowInput(false);
  };

  return (
    <div
      ref={setNodeRef}
      className={`bg-white rounded-2xl shadow p-5 min-h-[400px] transition ${
        isOver ? "bg-indigo-50" : ""
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-bold text-lg text-gray-700">{title}</h2>

        {status === "todo" && (
          <button
            onClick={() => setShowInput(true)}
            className="bg-indigo-500 text-white px-3 py-1 rounded"
          >
            + Add
          </button>
        )}
      </div>

      {/* Add Task Form */}
      {showInput && (
        <div className="mb-4 bg-gray-50 p-3 rounded-lg shadow-sm">
          <input
            type="text"
            placeholder="Task Title"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            className="w-full border p-2 rounded mb-2"
          />

          <textarea
            placeholder="Task Description"
            value={descInput}
            onChange={(e) => setDescInput(e.target.value)}
            className="w-full border p-2 rounded mb-2"
            rows={2}
          />

          <div className="flex justify-end gap-2">
            <button
              onClick={() => setShowInput(false)}
              className="px-3 py-1 bg-gray-300 rounded"
            >
              Cancel
            </button>

            <button
              onClick={handleAdd}
              className="px-3 py-1 bg-indigo-600 text-white rounded"
            >
              Add
            </button>
          </div>
        </div>
      )}

      {/* Task List */}
      <div className="space-y-4">
        {list.length === 0 ? (
          <p className="text-gray-400 text-center mt-10">No tasks yet</p>
        ) : (
          list.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        )}
      </div>
    </div>
  );
}
