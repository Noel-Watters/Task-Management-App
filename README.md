# **Task Management Application**

This is a **Task Management Application** built with **React**, **TypeScript**, **Auth0**, and **Bootstrap**. The application allows users to manage tasks with features like task creation, editing, deletion, and authentication. It demonstrates the use of **TypeScript** for type safety, **React Context API** for global state management, and **Auth0** for secure user authentication.

---

## **Features**

### **Task Management**
- **Task Dashboard**: View tasks grouped into "Incomplete" and "Completed" categories.
- **Task Creation**: Add new tasks with a title, description, due date, and completion status.
- **Task Editing**: Modify existing tasks.
- **Task Deletion**: Remove tasks from the dashboard.

### **Authentication**
- **Login/Logout**: Secure user authentication using **Auth0**.
- **Protected Routes**: Only authenticated users can access the dashboard and task management features.

### **TypeScript Integration**
- Strongly typed components and hooks for better code maintainability.
- TypeScript interfaces for task data and context.

### **State Management**
- Global state management using **React Context API** and a reducer for task operations.

### **Responsive Design**
- Styled with **Bootstrap** for a clean and responsive user interface.

---

## **Project Architecture**

### **Folder Structure**
```
src/
├── Auth0/
│   ├── Auth0Provider.tsx         # Auth0 provider for authentication
│   ├── AuthenticationGuard.tsx   # Protects routes for authenticated users
│   ├── CallbackPage.tsx          # Handles Auth0 callback
│   ├── LoginButton.tsx           # Login button component
│   ├── LogoutButton.tsx          # Logout button component
├── components/
│   ├── DashboardLists.tsx        # Displays task lists (incomplete and completed)
│   ├── task/
│       ├── task.ts               # Task interface
│       ├── taskContext.tsx       # Context API for task state management
│       ├── taskForm.tsx          # Form for creating and editing tasks
│       ├── taskReducer.ts        # Reducer for task operations
├── pages/
│   ├── AddTaskPage.tsx           # Page for adding a new task
│   ├── EditTaskPage.tsx          # Page for editing an existing task
│   ├── HomePage.tsx              # Task dashboard page
│   ├── LoginPage.tsx             # Login page
├── App.tsx                       # Main app component with routing
├── main.tsx                      # Entry point of the application
```

---

## **Getting Started**

### **Prerequisites**
- **Node.js** (v16 or later)
- **npm** or **yarn**

---

### **Installation**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set Up Auth0**
   - Go to the [Auth0 Dashboard](https://auth0.com/).
   - Create a new application and configure the following:
     - **Allowed Callback URLs**: `http://localhost:5173/callback`
     - **Allowed Logout URLs**: `http://localhost:5173/`
     - **Allowed Web Origins**: `http://localhost:5173`
   - Update the `Auth0Provider.tsx` file with your **domain** and **clientId**.

4. **Start the Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open the App**
   - Navigate to `http://localhost:5173` in your browser.

---

## **Usage**

### **Authentication**
1. On the login page (`/`), click the **Log In** button.
2. Log in using your Auth0 credentials.
3. After logging in, you will be redirected to the dashboard (`/home`).

### **Task Management**
1. **View Tasks**:
   - Tasks are grouped into "Incomplete" and "Completed" categories on the dashboard.
2. **Add a Task**:
   - Click the **Create New Task** button to open the task creation form.
3. **Edit a Task**:
   - Click the **Edit Task** button on a task card to modify its details.
4. **Delete a Task**:
   - Click the **Delete Task** button on a task card to remove it.

---

## **Project Details**

### **TypeScript Integration**
- The `Task` interface defines the structure of a task:
  ```ts
  export interface Task {
      id?: string;
      title: string;
      description?: string;
      dueDate?: string;
      isCompleted: boolean;
  }
  ```
- TypeScript is used to enforce type safety in components, hooks, and context.

### **State Management**
- The `TaskContext` provides global state management for tasks.
- The `taskReducer` handles actions like adding, updating, and removing tasks.

### **Routing**
- **React Router** is used for navigation.
- Protected routes are implemented using the `AuthenticationGuard` component.

### **Authentication**
- **Auth0** is used for secure user authentication.
- The `Auth0ProviderWithNavigate` component wraps the app and handles authentication.

---

## **Scripts**

- **Start Development Server**:
  ```bash
  npm run dev
  ```
- **Build for Production**:
  ```bash
  npm run build
  ```
- **Preview Production Build**:
  ```bash
  npm run preview
  ```
- **Lint Code**:
  ```bash
  npm run lint
  ```

---

## **Future Enhancements**
- Add task prioritization and sorting.
- Implement task search functionality.
- Add unit tests for components and hooks.
- Improve error handling and user feedback.

---

## **License**
This project is licensed under the MIT License.

---

## **Acknowledgments**
- [Auth0](https://auth0.com/) for authentication services.
- [Bootstrap](https://getbootstrap.com/) for styling.
- [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/) for the framework and type safety.