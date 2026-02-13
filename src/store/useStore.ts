import { create } from "zustand";
import type { Task, Status } from "../types/task";
import { v4 as uuid } from "uuid";

interface Store {
  tasks: Task[];
  user: string | null;
  error: string | null;

  login: (username: string) => void;
  logout: () => void;

  addTask: (task: Omit<Task, "id">) => void;
  moveTask: (id: string, status: Status) => void;
  deleteTask: (id: string) => void;

  clearError: () => void;
  editTask: (id: string, title: string, description: string) => void;

}

export const useStore = create<Store>((set) => ({
  tasks: [],
  user: localStorage.getItem("user") || null,
  error: null,

  login: (username) => {
    localStorage.setItem("user", username);
    set({ user: username });
  },

  logout: () => {
    localStorage.removeItem("user");
    set({ user: null });
  },

  clearError: () => set({ error: null }),

  // add task
  
  addTask: (task) => {
    const newTask: Task = {
      id: uuid(),
      ...task,
    };

    set((state) => ({
      tasks: [...state.tasks, newTask],
    }));
  },

  // Delete task
  deleteTask: (id) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
  // Edit task
  editTask: (id, title, description) => {
  set((state) => ({
    tasks: state.tasks.map((task) =>
      task.id === id ? { ...task, title, description } : task
    ),
  }));
},

// move task
  moveTask: (id, status) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, status } : task
      ),
    }));
  },
}));
