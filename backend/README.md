# CRM AI Backend

## 📌 Overview
This is the **FastAPI-based backend** for the CRM AI Dashboard. It provides **AI-powered features** like **data validation, sentiment analysis, customer segmentation, and model training**.

## 🚀 Features
- ✅ **AI-Enhanced Data Validation**
- 📊 **Sentiment Analysis (BERT Model)**
- 🔢 **Customer Segmentation (K-Means Clustering)**
- 🎓 **Custom AI Model Training for CRM Data**
- 🔌 **API Endpoints for Frontend Integration**

## 📂 File Structure
```
backend/
│── app/
│   ├── main.py              # FastAPI main application
│   ├── models.py            # Pydantic models for request validation
│   ├── services.py          # AI Model logic (Sentiment Analysis, Training, Predictions)
│   ├── routes.py            # API routes and endpoints
│   ├── config.py            # Configuration settings (e.g., model paths, environment variables)
│   └── __init__.py          # Package initializer
│── requirements.txt         # Dependencies (FastAPI, transformers, torch, uvicorn)
│── README.md                # Documentation
│── .gitignore               # Ignore unnecessary files (venv, __pycache__, etc.)
```

## 🚀 Installation & Setup
1️⃣ Clone the repository:
```sh
git clone https://github.com/Varun2183/AI-Enhanced-Data-Accuracy-in-CRM-Systems.git
cd AI-Enhanced-Data-Accuracy-in-CRM-Systems
```

2️⃣ Install dependencies:
```sh
pip install -r requirements.txt
```

3️⃣ Run the FastAPI server:
```sh
uvicorn app.main:app --reload
```

4️⃣ Access API documentation:
- Interactive Swagger UI: [http://localhost:8000/docs](http://localhost:8000/docs)
- Redoc Documentation: [http://localhost:8000/redoc](http://localhost:8000/redoc)

## 🔥 API Endpoints
| Endpoint                 | Method | Description |
|--------------------------|--------|-------------|
| `/validate/`             | POST   | Validate customer data |
| `/analyze-sentiment/`    | POST   | Perform sentiment analysis |
| `/predict-missing/`      | POST   | Predict missing customer details |
| `/train-model/`          | POST   | Train a custom AI model |
