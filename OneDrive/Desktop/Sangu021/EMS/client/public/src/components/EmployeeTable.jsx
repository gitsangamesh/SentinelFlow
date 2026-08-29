import React from "react";

const EmployeeTable = ({ employees }) => {

  return (
    <table className="w-full border mt-6">

      <thead className="bg-blue-600 text-white">

        <tr>
          <th className="p-3">ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
          <th>Salary</th>
        </tr>

      </thead>

      <tbody>

        {employees.map((emp) => (

          <tr key={emp.id} className="text-center border">

            <td className="p-3">{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.department}</td>
            <td>{emp.salary}</td>

          </tr>

        ))}

      </tbody>

    </table>
  );
};

export default EmployeeTable;