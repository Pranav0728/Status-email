import React from "react";

const StatusDropdown = ({ currentStatus, onChange }) => {
  return (
    <select
      value={currentStatus}
      onChange={(e) => onChange(e.target.value)}
      className="block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="Open">Open</option>
      <option value="Close">Close</option>
    </select>
  );
};

export default StatusDropdown;
