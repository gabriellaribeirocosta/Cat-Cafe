# Cat Cafe | Front-end

## Getting Started

### Installation

Clone the repository and install the dependencies:

```bash
cd cat-cafe/frontend
npm install

# Start the development server
npm run dev
```

## Firebase Setup
This project uses Firebase for authentication and other functionality. To set up Firebase, you need to create a `.env` file in the root of your project with the following environment variables:

Example `.env` file

```bash
VITE_API_KEY=your_firebase_api_key
VITE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_PROJECT_ID=your_firebase_project_id
VITE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_APP_ID=your_firebase_app_id
```

## File Structure

```
./
|-- public/
|-- assets/
|-- src/
    |-- pages/
    |-- components/
    |-- layout/
    |-- services/ (deal with API calls)
    |-- contexts/
    |-- hooks/
        App.css
        App.jsx
        Router.jsx (react router dom routes)
        global.css
        main.jsx

```
