import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
// import Navbar from "../../components/Navbar/Navbar";
import "./users.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUser,
  getAllUsers,
  upadateUserRole,
} from "../../redux/actions/admin";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";

function Row({ item, updatehandler, deletebuttonhandler }) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item._id}</td>
      <td>{item.email}</td>
      <td>{item.role}</td>
      <td>
        {item.subscription && item.subscription.status === "active"
          ? "Active"
          : "Not Active"}
      </td>
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
  // const users = [
  //   {
  //     _id: "sss",
  //     name: "ss",
  //     email: "ddd",
  //     role: "admin",
  //     subscription: {
  //       status: "activen",
  //     },
  //   },
  //   {
  //     _id: "dsss",
  //     name: "ss",
  //     email: "ddd",
  //     role: "admin",
  //     subscription: {
  //       status: "active",
  //     },
  //   },
  //   {
  //     _id: "dsss",
  //     name: "ss",
  //     email: "ddd",
  //     role: "admin",
  //     subscription: {
  //       status: "active",
  //     },
  //   },
  // ];
  const { users, loading, error, message } = useSelector(
    (state) => state.admin
  );

  const dispatch = useDispatch();

  const updatehandler = (userId) => {
    dispatch(upadateUserRole(userId));
  };

  const deletebuttonhandler = (userId) => {
    dispatch(deleteUser(userId));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    dispatch(getAllUsers());
  }, [dispatch, error, message]);

  return (
    <section className="ad-users">
      {/* <Navbar /> */}
      <div className="ad-users-main">
        {loading ? (
          <Loader />
        ) : (
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

                  {users &&
                    users.map((item) => (
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
        )}
        <div className="ad-users-main-two">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default Users;
