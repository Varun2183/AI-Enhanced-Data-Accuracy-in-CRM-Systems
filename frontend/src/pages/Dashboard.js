import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import CustomerSegmentation from "./CustomerSegmentation";
import SentimentPage from "./SentimentPage";

const Dashboard = () => {
    const [selectedTask, setSelectedTask] = useState("Customer Segmentation");

    return (
        <div className="flex bg-gray-800 text-white min-h-screen">
            <Sidebar selectedTask={selectedTask} setSelectedTask={setSelectedTask} />
            <div className="ml-64 p-6 w-full">
                {selectedTask === "Customer Segmentation" && <CustomerSegmentation />}
                {selectedTask === "Sentiment Analysis" && <SentimentPage />}
            </div>
        </div>
    );
};

export default Dashboard;

