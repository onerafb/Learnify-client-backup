import React, { useEffect, useState } from "react";
// import Navbar from "../Navbar/Navbar";
import "./profilestyle/profile.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { removeFromPlaylist } from "../../redux/actions/profile";
import { cancelSubscription, loadUser } from "../../redux/actions/user";
const Profile = ({ user }) => {
  // const [imagePrev, setimagePrev] = useState("");
  const dispatch = useDispatch();

  const { message, error } = useSelector((state) => state.profile);
  const { message: subscriptionMessage, error: subscriptionError } =
    useSelector((state) => state.subscription);

  const removeFromPlaylistHandler = async (id) => {
    await dispatch(removeFromPlaylist(id));
    dispatch(loadUser());
  };

  const cancelSubsHandler = () => {
    dispatch(cancelSubscription());
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
    if (subscriptionError) {
      toast.error(subscriptionError);
      dispatch({ type: "clearError" });
    }
    if (subscriptionMessage) {
      toast.success(subscriptionMessage);
      dispatch({ type: "clearMessage" });
      dispatch(loadUser())
    }
  }, [dispatch, error, message,subscriptionError,subscriptionMessage]);
  // const user = {
  //   name: "user",
  //   email: "a@g.com",
  //   createdAt: String(new Date().toISOString()),
  //   role: "user",
  //   subscription: {
  //     status: "active",
  //   },
  //   playlist: [
  //     {
  //       course: "ss",
  //       poster:
  //         "https://images.unsplash.com/photo-1614174124242-4b3656523295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  //     },
  //     {
  //       course: "ffs",
  //       poster:
  //         "https://images.unsplash.com/photo-1614174124242-4b3656523295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  //     },
  //     {
  //       course: "ffs",
  //       poster:
  //         "https://images.unsplash.com/photo-1614174124242-4b3656523295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  //     },
  //     {
  //       course: "ffs",
  //       poster:
  //         "https://images.unsplash.com/photo-1614174124242-4b3656523295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  //     },
  //     {
  //       course: "ffs",
  //       poster:
  //         "https://images.unsplash.com/photo-1614174124242-4b3656523295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  //     },
  //     {
  //       course: "ffs",
  //       poster:
  //         "https://images.unsplash.com/photo-1614174124242-4b3656523295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  //     },
  //     {
  //       course: "ffs",
  //       poster:
  //         "https://images.unsplash.com/photo-1614174124242-4b3656523295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  //     },
  //   ],
  // };
  return (
    <section className="profile-section">
      {/* <Navbar /> */}
      <h2 className="profile-h2">Profile</h2>
      <div className="profile-main">
        <div className="profile-main-one">
          <div className="left-pone">
            <div className="profile-img">
              <img src={user.avatar.url} alt="" />
            </div>
          </div>
          <div className="right-pone">
            <div className="c-one">
              <h3>Name</h3>
              <p className="no-wrap">{user.name}</p>
            </div>
            <div className="c-two">
              <h3>Email</h3>
              <p>{user.email}</p>
            </div>
            <div className="c-three">
              <h3>CreationTime</h3>
              <p>{user.createdAt.split("T")[0]}</p>
            </div>

            {user.role != "admin" && (
              <div className="c-four">
                <h3> Subscription</h3>
                <p>
                  {user.subscription &&
                  user.subscription.status === "active" ? (
                    <button
                      className="profile-cancel"
                      onClick={cancelSubsHandler}
                    >
                      Cancel
                    </button>
                  ) : (
                    <Link to="/subscribe">
                      <button className="profile-subscribe">Subscribe</button>
                    </Link>
                  )}
                </p>
              </div>
            )}
            <div className="div-five">
              <Link to="/updateprofile">
                <button className="profile-update">UpdateProfile</button>
              </Link>
              <Link to="/changepassword">
                <button className="profile-pass">ChangePassword</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="profile-main-two">
          <div className="profile-down-grid">
            <h3 className="addtoplaylist">Playlist</h3>
            {user.playlist.length > 0 && (
              <div className="profile-down-grid-two">
                {user.playlist.map((element, index) => (
                  <div key={index} className="profile-down-grid-two-inner-div">
                    <div className="playlist-poster-div">
                      <img
                        src={element.poster}
                        alt=""
                        className="playlist-poster"
                      />
                    </div>
                    <Link to={`/course/${element.course}`}>
                      <button className="profile-watch">Watch Now</button>
                    </Link>
                    <button
                      onClick={() => removeFromPlaylistHandler(element.course)}
                      className="profile-delete"
                    >
                      delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
