import React, { useState } from "react";

const EmployeeForm = () => {

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    salary: ""
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form className="bg-white shadow p-6 rounded-lg">

      <input
        name="name"
        placeholder="Employee Name"
        onChange={handleChange}
        className="border p-3 w-full mb-3"
      />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="border p-3 w-full mb-3"
      />

      <input
        name="department"
        placeholder="Department"
        onChange={handleChange}
        className="border p-3 w-full mb-3"
      />

      <input
        name="salary"
        placeholder="Salary"
        onChange={handleChange}
        className="border p-3 w-full mb-3"
      />

      <button className="bg-blue-600 text-white px-6 py-3 rounded">
        Save Employee
      </button>

    </form>
  );
};

export default EmployeeForm;