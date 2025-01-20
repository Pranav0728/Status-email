import React, { useState, useEffect } from "react";

const Table = () => {
  const [records, setRecords] = useState([]);

  // Fetch records from the backend
  const getRecords = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/records");
      if (!response.ok) {
        throw new Error("Failed to fetch records");
      }
      const data = await response.json();
      console.log(data)
      setRecords(data);
    } catch (error) {
      console.error("Error fetching records:", error);
    }
  };

  // Handle status change
  const handleStatusChange = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:8000/api/records/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error("Failed to update status");
      }

      const updatedRecord = await response.json();
      setRecords((prev) =>
        prev.map((record) =>
          record.id === id ? { ...record, status: updatedRecord.status } : record
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  useEffect(() => {
    getRecords();
  }, []);

  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Date</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{record.date}</td>
              <td className="p-3">{record.name}</td>
              <td className="p-3">{record.email}</td>
              <td className="p-3">
                <select
                  value={record.status}
                  onChange={(e) => handleStatusChange(record.id, e.target.value)}
                  className="border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-500"
                >
                  <option value="Open">Open</option>
                  <option value="Close">Close</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
