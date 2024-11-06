# JobHunter: Spring Boot + React

This is a full-stack application for job portal website.

## Project Structure

- **Frontend**: React app located in the `/frontend` directory.
- **Backend**: Spring Boot API located in the `/backend` directory.

## Requirements

- **Java 17+** (for Spring Boot)
- **Node.js 14+** (for React development)

## Setup Instructions

### 1. Clone the Repository
Clone the repository to your local machine:

```bash
git clone https://github.com/AshishJii/JobHunter.git
cd JobHunter
```

### 2. Setting up the Frontend

#### Install dependencies for React:

Navigate to the `frontend` directory and install the necessary packages:

```bash
cd frontend
npm install
```

#### Run the React development server:

```bash
npm start
```

Your React app will be running at [http://localhost:3000](http://localhost:3000).

### 3. Setting up the Backend

#### Install dependencies for Spring Boot:

Navigate to the `backend` directory and run Maven to install dependencies.

```bash
cd backend
mvn clean install
```

#### Run the Spring Boot application:

```bash
mvn spring-boot:run    # for Maven
```

Your Spring Boot app will be running at [http://localhost:8080](http://localhost:8080).

## Environment Variables

You can configure the `application.properties` file in backend folder to insert correct mysql database configuration.

## API Documentation

The API is built with Spring Boot. You can view all the enabled API at:

```
http://localhost:8080/swagger-ui/
```

## Contributing

We welcome contributions to improve the project. To get started:

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push to your fork and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.