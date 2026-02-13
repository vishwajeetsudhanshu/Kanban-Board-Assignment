# Modern Kanban Board Application

This is a Kanban board-inspired task management application that allows users to efficiently manage tasks across different stages of completion. The application provides a seamless and intuitive interface for users to organize their tasks and keep track of their progress.

A modern, responsive Kanban Board built with React and TypeScript.
This application helps teams organize tasks efficiently using drag-and-drop functionality with a smooth and fast user experience.



## Features

- **Homepage**: The homepage displays all tasks, categorized into different status groups: To Do, Doing, and Done.

- **Task Card**: Each task is presented as a card, showing the task title and description for quick reference.

- **Add Task**: Users can easily create a new task by filling out a form that prompts them for the task title and description.

- **Edit Task**: The application enables users to edit the title and description of an existing task, allowing for updates as needed.

- **Delete Task**: Users have the option to permanently remove a task, providing a comprehensive task management experience.

- **Task Status**: With a user-friendly drag-and-drop functionality, tasks can be effortlessly moved between the To Do, Doing, and Done categories to reflect their current status.

- **Responsive Design**: The application is fully responsive and functional on mobile devices, ensuring a consistent user experience across different screen sizes.


## Screenshots

<img width="1919" height="964" alt="Screenshot 2026-02-12 194930" src="https://github.com/user-attachments/assets/55df0e8b-21cb-4386-ac64-b2f462d48275" />



<img width="1919" height="962" alt="Screenshot 2026-02-13 093729" src="https://github.com/user-attachments/assets/02d43540-a481-4016-a668-b982bed251d0" />


## Technologies Used

- Front-end: **ReactJS, Tailwind CSS, TypeScript**
- Zustand:  **State Management**
- dnd-kit: **Drag & Drop**
- UUID : **Unique IDs**
- Version Control: **Git, Github**
- Deployment: **Vercel**


## Installation and Usage

1. Clone the repository to your local machine using the following command:
   ```
   https://github.com/dpandey62/Kanban-Board
   ```

2. Navigate to the `Frontend` directory:
   ```
   cd kanban-board
   ```

3. Install the required dependencies by running the following command:
   ```
   npm install
   ```
   
4. Finally, start the Frontend of the Application:
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to access the captivating world of TravelDiary.
   

## Optimistic UI Approach (State Rollback Handling)

   This project implements an Optimistic UI update strategy for a smooth user experience
   
# What is Optimistic UI?

  Optimistic UI updates the frontend state immediately before waiting for server confirmation.


## How it works in this project:

 1. When a task is moved between columns:

    - The UI updates instantly.

    - The Zustand store updates immediately.

 2. If a backend API fails (future scalable architecture):

      - The previous state is stored.

      - The state is rolled back to maintain consistency.

  This ensures:

  - Faster interaction

  - Better user experience

  - Minimal UI delay


## Live Demo

 Check out the live demo of the application at [Live Demo Link](https://kanban-board-theta-tan.vercel.app/).
 

## 📈 Future Improvements

 - Backend integration (Node.js + MongoDB)

 - Real-time collaboration (WebSockets)

 - User roles & permissions

 - Task priority & deadlines

 - Dark Mode toggle

## 🙌 Author

 Dev Pandey
 Frontend Developer | Full Stack Enthusiast

 LinkedIn: https://www.linkedin.com/in/devpandey6200/

 GitHub: https://github.com/dpandey62



Feel free to reach out to us with any questions or feedback. We hope you find this Kanban board task management application useful for your task organization needs!
