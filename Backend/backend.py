from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd
import json
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


with open("roc_metrics.json", "r") as f:
    roc_metrics = json.load(f)

pipeline = joblib.load("models/pipeline.joblib")

class InputData(BaseModel):
    age: int
    gender: int
    height: float
    weight: float
    ap_hi: int
    ap_lo: int
    cholesterol: int
    gluc: int
    smoke: int
    alco: int
    active: int

@app.post("/predict")
def predict(data:InputData):

    df = pd.DataFrame([{
        "age": data.age,
        "gender": data.gender,
        "height": data.height,
        "weight": data.weight,
        "ap_hi": data.ap_hi,
        "ap_lo": data.ap_lo,
        "cholesterol": data.cholesterol,
        "gluc": data.gluc,
        "smoke": data.smoke,
        "alco": data.alco,
        "active": data.active,
    }])

    pred = int(pipeline.predict(df)[0])

    prob = None
    if hasattr(pipeline, "predict_proba"):
        prob = float(pipeline.predict_proba(df)[0][1])

    return {
        "prediction": pred,
        "probability": prob
    }

@app.get("/roc")
def get_roc():
    return roc_metrics
