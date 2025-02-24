import React from "react";

const Sidebar = ({ selectedTask, setSelectedTask }) => {
    return (
        <div className="w-64 h-screen bg-gray-900 text-white p-5 fixed">
            <h2 className="text-lg font-bold mb-4">Navigation</h2>
            <label className="block mb-2">Choose a task</label>
            <select
                value={selectedTask}
                onChange={(e) => setSelectedTask(e.target.value)}
                className="w-full p-2 rounded bg-gray-800 text-white"
            >
                <option value="Customer Segmentation">Customer Segmentation</option>
                <option value="Sentiment Analysis">Sentiment Analysis</option>
            </select>
        </div>
    );
};

export default Sidebar;
