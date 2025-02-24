import React from "react";

const SentimentAnalysis = () => {
    const sentimentData = [
        { user_name: "Aravind S", user_location: "Tamil Nadu, India", user_description: "High Satisfaction" },
        { user_name: "Best Bulk SMS", user_location: "Abuja, Nigeria", user_description: "Provides SMS service" },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold">Sentiment Analysis</h2>
            <table className="w-full mt-4 bg-gray-900 text-white">
                <thead>
                    <tr>
                        <th className="p-2">User</th>
                        <th className="p-2">Location</th>
                        <th className="p-2">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {sentimentData.map((row, index) => (
                        <tr key={index}>
                            <td className="p-2">{row.user_name}</td>
                            <td className="p-2">{row.user_location}</td>
                            <td className="p-2">{row.user_description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SentimentAnalysis;
