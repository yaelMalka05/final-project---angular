# final-project---angular
# 🦁 Zoo Management & Ticketing System

A full-stack web application designed for managing zoo activities, viewing animal feeding schedules, and handling visitor ticket orders. The project features a robust **RESTful API** backend built with C# .NET and a dynamic responsive frontend built with Angular.

---

## 🚀 Features

### 🖥️ Backend (Server-Side)
* **RESTful Architecture:** Clean separation of concerns using the Controller-Service pattern.
* **Visitor Authentication:** Secure verification based on Identity Card (ID) and Email.
* **Ticket Management (CRUD):** Full support for creating, reading, updating, and deleting visitor tickets.
* **CORS Enabled:** Fully configured cross-origin resource sharing to communicate seamlessly with the Angular client.
* **JSON Formatting:** Native JSON serialization maintaining property naming policies for smooth frontend parsing.

### 🎨 Frontend (Client-Side)
* **Interactive Navigation:** SPA routing with dynamic login/logout headers.
* **Reactive Forms:** Robust user input handling with client-side validation (ID validation, email formats, and number boundaries).
* **Asynchronous Operations:** Efficient data loading using RxJS streams and concurrent API requests using `forkJoin` for animal schedules.

---

## 🛠️ Tech Stack

* **Frontend:** Angular, TypeScript, RxJS, HTML5, CSS3 (Modern Flexbox/CSS Grid layouts).
* **Backend:** C# / .NET Core Web API.
* **API Documentation:** Swagger UI.

---

## 🔌 API Endpoints Reference

The backend provides a well-structured set of endpoints to serve the client-side actions:

### Visitors Component
* `GET` `/api/Visitors/GetVisitorsById/{id}` - Fetches a visitor profile by ID.
* `GET` `/api/Visitors/GetVisitorsByIdAndMail/{id}/{email}` - Authenticates/verifies an existing visitor.
* `POST` `/api/Visitors/AddVisitors` - Registers a new visitor to the system.

### Tickets Component (Full CRUD)
* `GET` `/api/Tickets/GetTicketsByIdVisitors/{id}` - Retrieves all tickets related to a specific visitor.
* `POST` `/api/Tickets/AddTickets` - Places a new ticket order.
* `PUT` `/api/Tickets/UpdateTickets/{codeTickets}` - Modifies an existing ticket's details.
* `DELETE` `/api/Tickets/DeleteTickets/{codeTickets}` - Cancels a ticket order.

### Animals & Schedules
* `GET` `/api/Animals/GetAllAnimals` - Returns the list of all available animals, descriptions, and images.
* `GET` `/api/FeedingTimes/GetFeedingTimeByCodeAnimals/{code}` - Fetches specific feeding schedules and food types for a given animal.

---

## ⚙️ Setup & Installation

### Prerequisites
* .NET SDK (v6.0 or higher recommended)
* Node.js & npm
* Angular CLI

### Running the Backend (Server)
1. Navigate to the backend directory.
2. Run `dotnet restore` to install dependencies.
3. Run `dotnet run` to launch the application.
4. The server will launch and provide a Swagger UI dashboard locally.

### Running the Frontend (Client)
1. Navigate to the frontend directory.
2. Run `npm install` to install dependencies.
3. Run `ng serve` to start the local development server.
4. Open your browser and navigate to `http://localhost:4200/`.
