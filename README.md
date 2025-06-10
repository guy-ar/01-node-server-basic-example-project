# Basic Node.js HTTP Server

This is a minimal example of how to build a simple HTTP server using Node.js without any external frameworks.

## Project Structure


├── app.js # Entry point to create and start the HTTP server
└── routes.js # Route handling logic for incoming requests

## Features

- Serves a simple HTML form at the root URL (`/`)
- Handles POST requests to `/message`
- Saves the submitted message to a local file (`message.txt`)
- Redirects back to the homepage after submission

## How It Works

### `app.js`

- Imports Node's built-in `http` module and a custom route handler from `routes.js`
- Creates an HTTP server using `http.createServer()`
- Listens for requests on port `3000`

### `routes.js`

- Handles three primary cases:
  - `GET /` → Returns an HTML form
  - `POST /message` → Parses the form submission and saves it to `message.txt`
  - All other routes → Returns a default HTML message

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

### Running the Server

1. Clone or download this repository.
2. Open your terminal and navigate to the project folder.
3. Run the server:

```bash
node app.js
