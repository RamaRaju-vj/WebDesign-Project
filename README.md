# Work Management Web Application
# INFO 6150: Final Project

## Team Members: 
* Rama Raju NUID: 002698603
* Abhishek K NUID: 002246765
* Surya Saran NUID: 002276101
* Tejas Vasisht NUID: 002892433

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
 


    ```
npx create-react-app client
```
  Client folder - Frontend
  Server folder- Backend
```
cd client
npm start
```
AntD - UI library installation & set-up for react 
- AntD is used  for the components  like model, pop up tabs, notifications
- AntD website
- To install AntD
```
npm i antd
```
- Restart the server 
```
npm start
```

Antd Theme - To customize the components import "configprovider" from antd 
Ant : used for re-using of components

Tailwind css installation & setup
- Tailwind css is used for  the normal styling  like margins, paddings, font size, flex classes, grid classes
- To Install Tailwind CSS Follow these steps -->Tailwind css for create-react-app (from step2)
- To avoid conflicts between the tailwind CSS and Antd , and to use tailwind CSS and antd Parallelly you have to add one extra property called "core plugins" in the "tailwind.config.js"
- 
```
corePlugins: {
    preflight: false,
  },
```



Routing and folder structure (in src folder)
- pages folder - For normal routes
- components folder - For reusable things
- redux Folder - For state management purpose
- assets Folder -  For any static things
```
npm i react-router-dom axios redux react-redux @reduxjs/toolkit moment
```
- react-router-dom - for routing purpose
- axios - for making http calls
- redux react-redux @redux/toolkit  - for state management purpose
- moment - For working with dates & time 

For Login form we used onFinish antd component instead  of onChange method. 

Config folder :
 dbConfig.js - has Mongodb  Atlas connection defined in dbConfig.js and a variable ConnectDB is created in Backend/server.js to connect to mongodb local host.
