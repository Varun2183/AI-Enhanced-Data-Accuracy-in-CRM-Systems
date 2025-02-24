import React, { useState } from "react";

const KMeansClustering = () => {
    const [numClusters, setNumClusters] = useState(3);
    const clusterData = [
        { CustomerID: "3,000,006", MonthsInService: 56, Cluster: 1 },
        { CustomerID: "3,000,018", MonthsInService: 57, Cluster: 1 },
        { CustomerID: "3,000,034", MonthsInService: 55, Cluster: 1 },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold">KMeans Clustering</h2>
            <label className="block mt-4">Select number of clusters</label>
            <input
                type="range"
                min="1"
                max="10"
                value={numClusters}
                onChange={(e) => setNumClusters(e.target.value)}
                className="w-full mt-2"
            />
            <table className="w-full mt-4 bg-gray-900 text-white">
                <thead>
                    <tr>
                        <th className="p-2">CustomerID</th>
                        <th className="p-2">MonthsInService</th>
                        <th className="p-2">Cluster</th>
                    </tr>
                </thead>
                <tbody>
                    {clusterData.map((row, index) => (
                        <tr key={index}>
                            <td className="p-2">{row.CustomerID}</td>
                            <td className="p-2">{row.MonthsInService}</td>
                            <td className="p-2">{row.Cluster}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default KMeansClustering;
