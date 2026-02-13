import { DndContext } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import { useNavigate } from "react-router-dom";
import Column from "../components/Column";
import Toast from "../components/Toast";
import { useStore } from "../store/useStore";
import type { Status } from "../types/task";

export default function BoardPage() {
  const moveTask = useStore((state) => state.moveTask);
  const user = useStore((state) => state.user);
  const logout = useStore((state) => state.logout);
  const navigate = useNavigate();

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over) return;
    moveTask(active.id as string, over.id as Status);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="bg-white shadow-md px-10 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">Kanban Board</h1>

        <div className="flex items-center gap-6">
          <span className="text-gray-600">
            Welcome, <span className="font-semibold">{user}</span>
          </span>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="px-10 py-8">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Project Tasks
        </h2>

        <DndContext onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Column status="todo" title="To Do" />
            <Column status="inprogress" title="In Progress" />
            <Column status="done" title="Done" />
          </div>
        </DndContext>
      </div>

      <Toast />
    </div>
  );
}
