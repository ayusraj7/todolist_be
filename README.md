# todolist_be
Backend for todolist

# Task Manager Backend

## Technologies Used
- Express: API server
- MongoDB: Database
- Mongoose: ODM
- Socket.io: Real-time events
- JWT: Authentication
- Dotenv: Env config

## Main Features
- RESTful API for tasks & users
- User authentication (JWT)
- Real-time task events
- Error handling

## API Endpoints
- `/api/v1/auth/login` & `/register`: Auth
- `/api/v1/tasks`: Task CRUD
- `/api/v1/users`: User list

## Example Users
- User 1: `ayush.rajput@applore.in` / `ayush0098`
- User 2: `hemal@applore.in` / `hemal0098`

## How It Works
- Users login/register
- Auth required for all endpoints
- Tasks are created, updated, deleted
- Socket.io emits task events to rooms

## For Starting the code in local system 
1. git clone https://github.com/ayusraj7/todolist_be.git
2. cd todolist_fe
3. npm install
4. npm run start

# DEPLOYED URL 
1. https://todolist-be-tawny.vercel.app

##### while running it might take time as i have deployed on free tier vercel #####
