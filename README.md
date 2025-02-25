# AI-Enhanced-Data-Accuracy-in-CRM-Systems

## 📌 Overview
This project is an **AI-powered CRM system** that enhances data accuracy, performs **sentiment analysis, customer segmentation, and model training** using **FastAPI, React, and machine learning models**.

## 🚀 Features
- ✅ **AI-Enhanced Data Validation**
- 📊 **Sentiment Analysis using BERT**
- 🔢 **Customer Segmentation with K-Means Clustering**
- 🎓 **Custom AI Model Training for CRM Data**
- 📈 **Interactive Dashboard with Graphs & Logs**
- 🔌 **API Integration with FastAPI**

---

## 🏗️ Project Structure
```
crm_ai_project/
│── backend/                 # FastAPI Backend
│   ├── app/                 # Application logic
│   │   ├── main.py          # FastAPI main app
│   │   ├── models.py        # Pydantic models
│   │   ├── services.py      # AI model logic
│   │   ├── routes.py        # API endpoints
│   │   ├── config.py        # Configurations
│   │   └── __init__.py      # Package initializer
│   ├── requirements.txt     # Backend dependencies
│   ├── README.md            # Backend documentation
│── frontend/                # React Dashboard
│   ├── src/                 # Source files
│   │   ├── components/      # UI components
│   │   ├── pages/           # Dashboard pages
│   │   ├── services/        # API calls to backend
│   │   ├── App.js           # Main React app
│   │   ├── index.js         # Entry point
│   ├── public/              # Static files
│   ├── package.json         # Frontend dependencies
│   ├── README.md            # Frontend documentation
│── README.md                # Full project documentation
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone [https://github.com/Varun2183/AI-Enhanced-Data-Accuracy-in-CRM-Systems.git]
cd AI-Enhanced-Data-Accuracy-in-CRM-Systems
```

### 2️⃣ Backend Setup
```sh
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```
- API available at: **[http://localhost:8000/docs](http://localhost:8000/docs)**

### 3️⃣ Frontend Setup
```sh
cd frontend
npm install
npm start
```
- Dashboard available at: **[http://localhost:3000](http://localhost:3000)**

---

## 🔥 Key API Endpoints
| Endpoint                  | Method | Description |
|---------------------------|--------|-------------|
| `/validate/`              | POST   | Validate CRM data |
| `/analyze-sentiment/`     | POST   | Sentiment Analysis |
| `/predict-missing/`       | POST   | Predict missing data |
| `/train-model/`           | POST   | Train a custom AI model |

---

## 🏆 Contributors
- **Varun Yadav G** - Developer
- **Abhishek P** - Developer
- **Rishika Jha** - Developer
- **Rachana S** - Developer

---
🚀 **Enhancing CRM Data with AI!** 🚀
