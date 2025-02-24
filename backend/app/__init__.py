# __init__.py - Marks the 'app' directory as a package

# Import necessary modules for easier access
from .models import CRMData
from .services import analyze_sentiment, predict_missing_data, train_model
from .routes import router
from .config import MODEL_NAME
