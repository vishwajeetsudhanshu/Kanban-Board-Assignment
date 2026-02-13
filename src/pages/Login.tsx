import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";

export default function Login() {
  const navigate = useNavigate();
  const login = useStore((state) => state.login);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    // Mock login
    login(form.username);
    navigate("/board");
  };

  return (
   <div className="min-h-screen flex items-center justify-center bg-indigo-500">


      <div className="bg-white shadow-2xl rounded-2xl w-[400px] p-8">

       

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Username */}
          <div>
            <label className="block text-gray-600 text-sm mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Email */}
           {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          {/* Password */}
          <div>
            

            <div className="relative">
              <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

              
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-semibold transition duration-200"
          >
            Login
          </button>
        </form>

       
      </div>
    </div>
  );
}
