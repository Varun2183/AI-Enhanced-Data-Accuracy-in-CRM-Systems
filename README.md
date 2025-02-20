# CRM AI Backend

## Overview

This project provides an AI-powered backend service for enhancing data accuracy in a CRM system. It utilizes FastAPI to create RESTful endpoints for data validation, sentiment analysis, missing data prediction, and AI model training.

## Features

- **Data Validation**: Checks the correctness of email and phone inputs.
- **Sentiment Analysis**: Analyzes customer feedback using a pretrained sentiment model.
- **Missing Data Prediction**: Uses a text generation model to fill in missing customer details.
- **Model Training**: Trains a machine learning model on a dataset to improve data accuracy.

## Project Structure

```
crm_ai_backend/
│── app/
│   ├── main.py              # Main FastAPI application
│   ├── models.py            # Pydantic models for request validation
│   ├── services.py          # AI model processing (Sentiment, Text Generation, Training)
│   ├── routes.py            # API routes
│   ├── config.py            # Configuration settings
│   └── __init__.py          # Makes 'app' a package
│── requirements.txt         # Dependencies
│── README.md                # Documentation
│── .gitignore               # Ignore unnecessary files
```

## Setup Instructions

### Prerequisites

Ensure you have Python 3.8+ installed.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/crm_ai_backend.git
   cd crm_ai_backend
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

### Running the API Server

Start the FastAPI server using Uvicorn:

```sh
uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
```

The API will be available at `http://127.0.0.1:8000`.

### API Endpoints

#### 1. Validate CRM Data

- **Endpoint:** `POST /validate/`
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "1234567890"
  }
  ```
- **Response:**
  ```json
  { "status": "Data is valid" }
  ```

#### 2. Sentiment Analysis

- **Endpoint:** `POST /analyze-sentiment/`
- **Request Body:**
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
