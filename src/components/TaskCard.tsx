import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type { Task } from "../types/task";
import { useStore } from "../store/useStore";

export default function TaskCard({ task }: { task: Task }) {
  const deleteTask = useStore((state) => state.deleteTask);
  const editTask = useStore((state) => state.editTask);

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: task.id });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition: "transform 150ms ease",
    touchAction: "none",
    opacity: isDragging ? 0.85 : 1,
  };

  const handleSave = () => {
    if (!title.trim()) return;
    editTask(task.id, title, description);
    setIsEditing(false);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...(!isEditing ? listeners : {})}
      {...(!isEditing ? attributes : {})}
      className="bg-gray-50 border rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-grab active:cursor-grabbing"
    >
      {isEditing ? (
        <>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded mb-3"
            aria-label="Task title"
          />

          <label className="block text-sm font-medium text-gray-600 mb-1">
            Description
          </label>
          <textarea
            rows={2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded mb-3"
            aria-label="Task description"
          />

          <div className="flex justify-end gap-3 text-sm">
            <button
              onClick={() => setIsEditing(false)}
              className="text-gray-500"
            >
              Cancel
            </button>
            <button onClick={handleSave} className="text-green-600 font-medium">
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="font-medium text-gray-700 mb-2">{task.title}</p>

          {task.description && (
            <p className="text-sm text-gray-500 mb-3">{task.description}</p>
          )}

          <div className="flex justify-between text-sm">
            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => setIsEditing(true)}
              className="text-green-600 hover:underline"
            >
              Edit
            </button>

            <button
              onPointerDown={(e) => e.stopPropagation()}
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}


