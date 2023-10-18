import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import "./users.css";

function Row({ item, updatehandler, deletebuttonhandler }) {
  return (
    <tr>
      <td>{item._id}</td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.role}</td>
      <td>{item.subscription.status === "active" ? "Active" : "Not Active"}</td>
      <td>
        <button className="users-bt" onClick={() => updatehandler(item._id)}>
          Change Role
        </button>
        <button
          className="users-bt"
          onClick={() => deletebuttonhandler(item._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

const Users = () => {
  const users = [
    {
      _id: "sss",
      name: "ss",
      email: "ddd",
      role: "admin",
      subscription: {
        status: "activen",
      },
    },
    {
      _id: "dsss",
      name: "ss",
      email: "ddd",
      role: "admin",
      subscription: {
        status: "active",
      },
    },
    {
      _id: "dsss",
      name: "ss",
      email: "ddd",
      role: "admin",
      subscription: {
        status: "active",
      },
    },
  ];
  const updatehandler = (userid) => {
    console.log(userid);
  };
  const deletebuttonhandler = (userid) => {
    console.log(userid);
  };
  return (
    <section className="ad-users">
      <Navbar />
      <div className="ad-users-main">
        <div className="ad-users-main-one">
          <div className="u-tb-con">
            <table>
              <tbody>
              <tr>
                <th>Name</th>
                <th>Id</th>
                <th>Email</th>
                <th>Role</th>
                <th>Subscription</th>
                <th itemType="">Action</th>
              </tr>
           
              {users.map((item) => (
                <Row
                  key={item._id}
                  item={item}
                  deletebuttonhandler={deletebuttonhandler}
                  updatehandler={updatehandler}
                />
              ))}
                 </tbody>
            </table>
          </div>
        </div>
        <div className="ad-users-main-two">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default Users;
