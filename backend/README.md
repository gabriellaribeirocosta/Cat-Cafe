# Cat Cafe API

## Installation

Change into the backend repository and install the dependencies:

```bash
cd cat-cafe/backend
npm install

# Start the development server
npm run start:dev
```

## Configuration
`credentials.json`
This file is required for backend configuration. It contains sensitive information such as API keys and credentials for accessing external services. **Make sure the `credentials.json` file is in the root directory of project.** 

## File Structure

The backend follows the Model-View-Controller (MVC) framework.

```
./
|-- src/
    |-- controllers/
    |-- database/
    |-- middlewares/
    |-- models/
    |-- routes/
    app.js
```
