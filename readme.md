# Powerlifting API

This is a Node.js/Express project that serves powerlifting data as APIs.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/powerlifting-api.git`
2. Install the dependencies: `npm install`
3. Start the server: `npm start`

## API Endpoints

The following API endpoints are available:

- `GET /lifters`: Retrieves a list of all lifters.
- `GET /lifters/:id`: Retrieves a specific lifter by ID.
- `POST /lifters`: Creates a new lifter.
- `PUT /lifters/:id`: Updates an existing lifter by ID.
- `DELETE /lifters/:id`: Deletes a lifter by ID.

## Database

This project uses a MongoDB database to store the powerlifting data. Make sure you have MongoDB installed and running on your machine.

## Environment Variables

The following environment variables are required to run this project:

- `PORT`: The port number on which the server will run.
- `MONGODB_URI`: The connection string for the MongoDB database.

You can set these variables in a `.env` file in the root directory of the project.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
