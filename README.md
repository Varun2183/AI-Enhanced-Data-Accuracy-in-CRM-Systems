# AI-Enhanced Data Accuracy in CRM Systems

## Overview
This project integrates an AI-powered backend with a dashboard frontend to enhance data accuracy in CRM systems. It uses FastAPI for the backend and React for the frontend, incorporating NLP models for tasks such as data validation, sentiment analysis, and missing data prediction.

## Features
- **AI-Powered Data Validation**: Ensures email and phone accuracy.
- **Sentiment Analysis**: Analyzes customer feedback.
- **Missing Data Prediction**: Uses AI to fill in missing details.
- **Model Training**: Allows training on new datasets.
- **Dashboard**: Displays results with visualizations (graphs, logs, model training status).

## Project Structure
```
crm_ai_project/
│── backend/
│   ├── app/
│   │   ├── main.py              # FastAPI application
│   │   ├── models.py            # Pydantic models
│   │   ├── services.py          # AI processing (sentiment, text generation, training)
│   │   ├── routes.py            # API routes
│   │   ├── config.py            # Config settings
│   │   ├── __init__.py          # Package initializer
│   ├── requirements.txt         # Backend dependencies
│   ├── README.md                # Backend documentation
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.js     # Main dashboard UI
│   │   │   ├── Graphs.js        # Visual representation of data
│   │   │   ├── Logs.js          # Training logs display
│   │   │   ├── ModelStatus.js   # Training status component
│   │   ├── App.js               # Main React app
│   ├── public/
│   ├── package.json             # Frontend dependencies
│   ├── README.md                # Frontend documentation
│── README.md                    # Combined project documentation
│── .gitignore                    # Ignore unnecessary files
```

## Setup Instructions
### Prerequisites
- Python 3.8+
- Node.js 14+

### Backend Setup
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Create a virtual environment and activate it:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows, use: venv\Scripts\activate
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Run the FastAPI server:
   ```sh
   uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm start
   ```

### Accessing the Application
- **API Endpoints**: `http://127.0.0.1:8000`
- **Dashboard**: `http://localhost:3000`

## API Endpoints
#### 1. Validate CRM Data
- **Endpoint:** `POST /validate/`
- **Request:**
  ```json
  { "name": "John Doe", "email": "johndoe@example.com", "phone": "1234567890" }
  ```
- **Response:**
  ```json
  { "status": "Data is valid" }
  ```

#### 2. Sentiment Analysis
- **Endpoint:** `POST /analyze-sentiment/`
- **Request:**
  ```json
  { "feedback": "This product is amazing!" }
  ```
- **Response:**
  ```json
  { "sentiment": "POSITIVE" }
  ```

#### 3. Predict Missing Data
- **Endpoint:** `POST /predict-missing/`
- **Response:**
  ```json
  { "name": "Suggested Name" }
  ```

#### 4. Train Model
- **Endpoint:** `POST /train-model/`
- **Response:**
  ```json
  { "message": "Model training complete" }
  ```

## Deployment on IBM Watson
1. **Create an IBM Cloud Account** at [IBM Cloud](https://cloud.ibm.com/).
2. **Provision an AI Model Deployment Service** in Watson Machine Learning.
3. **Upload Your Model** (`trained_model/` directory) to IBM Watson.
4. **Deploy and Test** the model using Watson API.

## License
This project is licensed under the MIT License.

## Author
[Your Name]

