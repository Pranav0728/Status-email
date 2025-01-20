# Status Email Project

This project is a full-stack web application that uses React for the frontend, Node.js with Express for the backend, Sequelize for ORM, and MySQL as the database. It includes a table to manage status updates and sends email notifications based on status changes.

## Environment Variables

Before running the project, make sure to set the following environment variables in your `.env` file:

PORT=3000 
DB_HOST=your-database-host 
DB_USER=your-database-username 
DB_PASSWORD=your-database-password 
DB_NAME=your-database-name 
EMAIL_USER= your-email-id
EMAIL_PASS= your-email-pass


> **Note:** Replace `your-database-host`, `your-database-username`, `your-database-password`, and `your-database-name` with your MySQL credentials. You can use a local MySQL database or a dummy MySQL setup.

## Installation

### Backend

1. Navigate to the backend directory.
2. Run the following command to install dependencies:

```bash
npm i

```
3 Once the dependencies are installed, start the backend server:
```bash
npm run dev
```
### Frontend

1. Navigate to the frontend directory.
2. Run the following command to install dependencies:

```bash
npm i

```
3 Once the dependencies are installed, start the frontend server:
```bash
npm start
```
The frontend will be available at http://localhost:3000 and the backend at http://localhost:8000 (or the port you've specified).
