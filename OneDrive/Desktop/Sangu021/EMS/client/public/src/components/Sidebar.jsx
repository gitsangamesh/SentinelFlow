import React from "react";
import {
  FaUsers,
  FaHome,
  FaUserPlus,
  FaCalendarCheck,
  FaCog,
  FaSignOutAlt
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white">

      <h1 className="text-3xl font-bold text-center py-6">
        EMS
      </h1>

      <ul className="space-y-2">

        <li className="flex items-center gap-3 p-4 hover:bg-slate-700 cursor-pointer">
          <FaHome />
          Dashboard
        </li>

        <li className="flex items-center gap-3 p-4 hover:bg-slate-700 cursor-pointer">
          <FaUsers />
          Employees
        </li>

        <li className="flex items-center gap-3 p-4 hover:bg-slate-700 cursor-pointer">
          <FaUserPlus />
          Add Employee
        </li>

        <li className="flex items-center gap-3 p-4 hover:bg-slate-700 cursor-pointer">
          <FaCalendarCheck />
          Attendance
        </li>

        <li className="flex items-center gap-3 p-4 hover:bg-slate-700 cursor-pointer">
          <FaCog />
          Settings
        </li>

        <li className="flex items-center gap-3 p-4 hover:bg-red-600 cursor-pointer mt-20">
          <FaSignOutAlt />
          Logout
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;