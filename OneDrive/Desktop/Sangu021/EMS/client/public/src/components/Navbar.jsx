import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white h-16 flex items-center justify-between px-8 shadow">
      <h2 className="text-2xl font-bold">EMS Dashboard</h2>

      <div className="flex items-center gap-3">
        <img
          src="/avatar.png"
          alt="User"
          className="w-10 h-10 rounded-full"
        />

        <div>
          <h3 className="font-semibold">Administrator</h3>
          <p className="text-sm">admin@ems.com</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;