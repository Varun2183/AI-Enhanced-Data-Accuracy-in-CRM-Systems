from fastapi import APIRouter, HTTPException
from app.models import CRMData
from app.services import analyze_sentiment, predict_missing_data, train_model

router = APIRouter()

@router.post("/validate/")
def validate_data(data: CRMData):
    corrected_data = {}
    if data.email and "@" not in data.email:
        corrected_data["email"] = "Invalid Email Format"
    if data.phone and not data.phone.isdigit():
        corrected_data["phone"] = "Invalid Phone Number"
    return corrected_data if corrected_data else {"status": "Data is valid"}

@router.post("/analyze-sentiment/")
def sentiment_analysis(data: CRMData):
    if not data.feedback:
        raise HTTPException(status_code=400, detail="Feedback is required")
    return {"sentiment": analyze_sentiment(data.feedback)}

@router.post("/predict-missing/")
def predict_missing():
    return {"name": predict_missing_data()}

@router.post("/train-model/")
def train():
    return {"message": train_model()}