# Node.js MongoDB Employee Management Project

This project is a simple Employee Management System built with Node.js, Express, MongoDB, and EJS. It allows users to add, view, edit, and delete employee records through a web interface.

Deployment Link :- 

## Features
- Add new employees
- View all employees
- Edit employee details
- Delete employees
- Search employees
- Responsive UI with Bootstrap and custom CSS

## Technology

- Node.js
- Express.js
- MongoDB & Mongoose
- EJS (Embedded JavaScript Templates)
- Bootstrap 5
- Custom CSS

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- EJS (Embedded JavaScript Templates)
- Bootstrap 5
- Custom CSS

## Folder Structure

```
Node.js-mongoDB-PR/
│
├── index.js                # Main application entry point
├── package.json            # Project metadata and dependencies
│
├── config/
│   └── db.js               # MongoDB connection configuration
│
├── models/
│   └── Employee.js         # Mongoose schema/model for Employee
│
├── public/
│   └── css/
│       └── style.css       # Custom stylesheets
│
├── views/                  # EJS templates
│   ├── header.ejs
│   ├── index.ejs
│   ├── edit.ejs
│   └── viewdata.ejs
│
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v14 or above)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd Node.js-mongoDB-PR
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Configure MongoDB connection in `config/db.js` if needed.
4. Start the application:
   ```
   node index.js
   ```
5. Open your browser and go to `http://localhost:3000`

## License
This project is licensed under the MIT License.
