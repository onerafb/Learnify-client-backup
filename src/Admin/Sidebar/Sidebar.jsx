import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";
function LinkButton({ url, text, s_active }) {
  return (
    <Link to={`/admin/${url}`}>
      <button className={s_active ? "side-bt s_active" : "side-bt"}>
        {text}
      </button>
    </Link>
  );
}
const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="sidebar">
      <LinkButton
        text="Create Course"
        url={"createcourses"}
        s_active={location.pathname === "/admin/createcourses"}
      />
      <LinkButton
        text="Courses"
        url={"admincourses"}
        s_active={location.pathname === "/admin/admincourses"}
      />
      <LinkButton
        text="Users"
        url={"users"}
        s_active={location.pathname === "/admin/users"}
      />
    </div>
  );
};

export default Sidebar;
