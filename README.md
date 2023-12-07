# Work Management Web Application

## Overview

This is a work task management web application built using the MERN stack (MongoDB, Express.js, React, and Node.js) and follows the MVC (Model-View-Controller) architecture. The application is designed to help teams and individuals efficiently manage and track their work tasks, improving collaboration and productivity.

## Features

- **User Authentication**: Secure user registration and authentication to ensure data privacy and user-specific task management.

- **Task Creation and Management**: Users can create, update, and delete tasks. Each task includes details such as title, description, due date, priority, and status.

- **Filter and Sorting**: Ability to filter and sort tasks based on various criteria, making it easy to find and focus on specific tasks.

- **Real-time Updates**: Utilizes WebSocket for real-time updates on task status and changes, providing a seamless collaborative environment for teams.

- **Dashboard**: A dashboard that provides an overview of tasks, including pending tasks, completed tasks, and upcoming deadlines.

## Technologies Used

- **Frontend**:
  - React.js for the user interface
  - Redux for state management
  - Axios for handling HTTP requests

- **Backend**:
  - Node.js with Express.js for the server
  - MongoDB as the database using Mongoose for object modeling
  - WebSocket for real-time communication
