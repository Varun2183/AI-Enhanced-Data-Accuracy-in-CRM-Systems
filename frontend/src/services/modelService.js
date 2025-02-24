import API from "./api";

// Train the AI model
export const trainModel = async () => {
    try {
        const response = await API.post("/train-model/");
        return response.data;
    } catch (error) {
        console.error("Model Training Error:", error);
        throw error;
    }
};
