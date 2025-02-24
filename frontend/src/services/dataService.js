import API from "./api";

// Validate customer data
export const validateData = async (customerData) => {
    try {
        const response = await API.post("/validate/", customerData);
        return response.data;
    } catch (error) {
        console.error("Validation Error:", error);
        throw error;
    }
};

// Perform sentiment analysis on feedback
export const analyzeSentiment = async (feedback) => {
    try {
        const response = await API.post("/analyze-sentiment/", { feedback });
        return response.data;
    } catch (error) {
        console.error("Sentiment Analysis Error:", error);
        throw error;
    }
};

// Predict missing data
export const predictMissingData = async () => {
    try {
        const response = await API.post("/predict-missing/");
        return response.data;
    } catch (error) {
        console.error("Prediction Error:", error);
        throw error;
    }
};
