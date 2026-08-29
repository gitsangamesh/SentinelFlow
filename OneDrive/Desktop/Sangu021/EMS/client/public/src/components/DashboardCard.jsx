import React from "react";

const DashboardCard = ({ title, value, color }) => {
  return (
    <div
      className={`rounded-lg shadow-lg p-6 ${color} text-white`}
    >
      <h3 className="text-lg">{title}</h3>

      <h1 className="text-4xl font-bold mt-3">
        {value}
      </h1>
    </div>
  );
};

export default DashboardCard;