import React from "react";
import SentimentAnalysis from "../components/SentimentAnalysis";

const SentimentPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold">Customer Segmentation, Churn Analysis, and Sentiment Analysis</h1>
            <SentimentAnalysis />
        </div>
    );
};

export default SentimentPage;
