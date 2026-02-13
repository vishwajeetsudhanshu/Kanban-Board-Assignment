import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-green-100 to-green-300">


      
      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-5 bg-white shadow-sm">
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-red-600 cursor-pointer"
        >
          Kanban Board
        </h1>

        <div className="space-x-6 hidden md:flex">
          <button
            onClick={() => navigate("/features")}
            className="text-gray-600 hover:text-green-600"
          >
            Features
          </button>

          <button
            onClick={() => navigate("/pricing")}
            className="text-gray-600 hover:text-green-600"
          >
            Pricing
          </button>

          <button
            onClick={() => navigate("/resources")}
            className="text-gray-600 hover:text-green-600"
          >
            Resources
          </button>
        </div>

        <button
          onClick={() => navigate("/login")}
          className="bg-red-500 hover:bg-red-600 transition text-white px-5 py-2 rounded-lg"
        >
          Get Started
        </button>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20">
        
        {/* LEFT SIDE */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Kanban board <br /> for agile teams
          </h2>

          <div className="text-lg text-gray-700 leading-relaxed">
            <p>
              The kanban board
              gives your team full visibility into ongoing work.
            </p>
            <p>Optimize workflows and eliminate bottlenecks.</p>
            <p>Create work items, customize stages, and set WIP limits.</p>
            <p>Monitor progress in real time and keep projects on track.</p>
          </div>

          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 hover:bg-red-600 transition text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg"
          >
            Sign Up For Free
          </button>
        </div>

        {/* RIGHT SIDE - BOARD PREVIEW */}
        <div className="md:w-1/2 mt-16 md:mt-0 flex gap-6 justify-center flex-wrap">
          
          {/* Column 1 */}
          {/* <div className="bg-white rounded-xl shadow-xl p-4 w-48">
            <h3 className="font-semibold mb-3 text-gray-700">To Do</h3>
            <div className="bg-gray-100 p-3 rounded mb-3 shadow-sm">
              Design UI
            </div>
            <div className="bg-gray-100 p-3 rounded shadow-sm">
              Setup API
            </div>
          </div> */}

          {/* Column 2 */}
          {/* <div className="bg-white rounded-xl shadow-xl p-4 w-48">
            <h3 className="font-semibold mb-3 text-gray-700">
              In Progress
            </h3>
            <div className="bg-yellow-100 p-3 rounded mb-3 shadow-sm">
              Build Components
            </div>
          </div> */}

          {/* Column 3 */}
          {/* <div className="bg-white rounded-xl shadow-xl p-4 w-48">
            <h3 className="font-semibold mb-3 text-gray-700">Done</h3>
            <div className="bg-green-100 p-3 rounded shadow-sm">
              Project Setup
            </div>
          </div> */}
        </div>
      </section>

      {/* ================= FEATURE SECTION ================= */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-100 p-8 rounded-xl">
            
            <div className="flex gap-3 items-start">
              <span className="text-green-600 font-bold text-lg">✓</span>
              <p>Promote team focus and productivity.</p>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-green-600 font-bold text-lg">✓</span>
              <p>Visualize the status of your work in real time.</p>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-green-600 font-bold text-lg">✓</span>
              <p>Identify bottlenecks and optimize workflows.</p>
            </div>

            <div className="flex gap-3 items-start">
              <span className="text-green-600 font-bold text-lg">✓</span>
              <p>Set work-in-progress limits to improve efficiency.</p>
            </div>
          </div>

          {/* Big Heading */}
          <div className="text-center mt-16">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Align work with your team’s capacity <br />
              and enhance productivity with <br />
              a real-time kanban board.
            </h2>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}
