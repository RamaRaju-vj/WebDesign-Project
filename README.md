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

```

TECHSTACK Used
●	HTML5 - Used for information page as part of Assignment-6.
●	BOOTSTRAP & TAILWIND CSS - Used for Grid and Flex Layouts & as part of Assignment-6.
●	CSS3 - Used for styling purpose.
●	REACT - Used in complete project. ● JAVASCRIPT - Build the code using JS ● NODE JS - Used in the project setup.
●	MONGODB - The database.
●	ANT D - To import antd forms, links, buttons.
●	EXPRESS JS - API’s.
●	RENDER - To host the website.
 
Registration Page & Login Page 
●	New Employee can register by providing details.
●	Email Id and Password validations are used.
●	Login page is accessible in the start and the employee can login using the details their provided while registering.
Home Page
●	A welcome message is displayed consisting of employee name.
●	Header section consists of Title, First Name that is clickable and redirects to employee section,  a notification icon ,  and a logout button.
●	It also consists of list of projects assigned to an employee.
 
Tasks Dashboard
●	Shows list of tasks assigned to an employee and consists of sorting by Status, Assigned by,  and Assigned to options.
●	An employee can change the status according to the update they want to intimate to the admin.
●	Action row is visible only to the admin accounts not to a general employee. Admins can delete or edit the tasks.
●	Also admin can upload an image in the edit section that can be viewed by the employee.
Members Page
●	Owner comes into the play by creating the main project. 
●	Owner can assign an employee to admin and give privileges to admin to edit or delete the tasks.
●	List of all members are displayed under members section.
 
Hosting
●	We used Render to host our website and it is deployed on a web server. We have linked our github repository to render to generate a new web service . 
●	It generates a website link which can be customized according to our requirements.
 
Databases
●	We used MongoDB Atlas as our database. As it is a document database with the scalability and flexibility. It also handles the aspects of running the mongoDB database including deployment, management and scaling.
●	Also we bcrypt and hashed the password before storing it in the database.
 
Session Management
●	This Node.js code uses the jsonwebtoken package to implement JWT-based authentication middleware. 
●	It extracts a JWT from the Authorization header of incoming requests, verifies the token using a secret key stored in environment variables, and sets the user's ID in the request body. 
●	The middleware function uses a try...catch block for error handling, allowing requests with valid tokens to proceed and responding with an error message if the token is invalid or expired. 
●	This implementation ensures secure user authentication in an Express.js application.
```

#Project Screenshots

<img width="349" alt="image" src="https://github.com/RamaRaju-vj/WebDesign-Project/assets/144737522/d35b3840-1fd0-4759-a03f-277d5374dfed">


<img width="644" alt="image" src="https://github.com/RamaRaju-vj/WebDesign-Project/assets/144737522/b97ef007-e37b-444d-acef-f7a5f0bc64b6">



<img width="709" alt="image" src="https://github.com/RamaRaju-vj/WebDesign-Project/assets/144737522/c75b7f15-9ef7-44b0-b79e-aa0e62ee8aa0">


<img width="554" alt="image" src="https://github.com/RamaRaju-vj/WebDesign-Project/assets/144737522/52d1b7da-c9b0-436b-bdd3-fbd5bf03b251">


<img width="476" alt="image" src="https://github.com/RamaRaju-vj/WebDesign-Project/assets/144737522/54165665-60a1-4141-a2bb-d8fe317676f8">


<img width="554" alt="image" src="https://github.com/RamaRaju-vj/WebDesign-Project/assets/144737522/70e7e9e9-d52c-4c59-a4a3-f33b09b3fb4a">


## Assignment 6 - using bootstarp and html 

<img width="554" alt="image" src="https://github.com/RamaRaju-vj/WebDesign-Project/assets/144737522/2622cb90-4cbc-40b3-bd14-d4de79fa452b">

<img width="554" alt="image" src="https://github.com/RamaRaju-vj/WebDesign-Project/assets/144737522/737ee9ad-5b68-4128-be4f-54ade4fe586e">










