import React, { useState, useEffect } from "react";
// import Navbar from "../Navbar/Navbar";
// import test from "../../assets/images/test.jpg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./courses.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../redux/actions/course";
import toast from "react-hot-toast";
import { addToPlaylist } from "../../redux/actions/profile";
import { loadUser } from "../../redux/actions/user";

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <>
      <img src={imageSrc} alt="test" />
      <h1>{title}dfsdfds</h1>
      <h4>{description}</h4>
      <h4>{`Creator - ${creator}`}</h4>
      <h4>{`Lectures - ${lectureCount}`}</h4>
      <h4>{`Views - ${views}`}</h4>
      <Link to={`/course/${id}`} className="course-link">
        Watch now
      </Link>
      <button onClick={() => addToPlaylistHandler(id)} className="add-bt">
        Add to Playlist
      </button>
    </>
  );
};

const Courses = () => {
  const [keyword, setkeyword] = useState("");
  const [category, setcategory] = useState("");
  const [state, setstate] = useState(false);

  const hs = () => {
    setstate(!state);
  };
  const setclick = () => {
    setstate(!state);
    // setcategory(item);
  };
  const dispatch = useDispatch();
  const addToPlaylistHandler =async (courseId) => {
    await dispatch(addToPlaylist(courseId));
    dispatch(loadUser())
  };

  const categories = [
    "Web dev",
    "Web dev",
    "Web dev",
    "Web dev",
    "Web dev",
    "Web dev",
    "Web dev",
    "Web dev",
    "Web dev",
  ];
  const {  courses, error, message } = useSelector(
    (state) => state.course
  );
  useEffect(() => {
    dispatch(getAllCourses(category, keyword));
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [category, keyword, dispatch, error, message]);
  return (
    <>
      <section className="section-courses">
        {/* <Navbar /> */}
        <div className="cr-one">
          <div className="courses-one">
            <input
              type="text"
              value={keyword}
              placeholder="Search a course"
              onChange={(e) => setkeyword(e.target.value)}
              className="course-input"
            />
          </div>
          <div className="show-hide" onClick={hs}>
            <button className="cr-bt">Select Course</button>
          </div>
          <div className={state ? "courses-two cr-active" : "courses-two"}>
            <div className="courses-u">
              <span onClick={hs}>
                <AiOutlineClose />
              </span>
            </div>
            <div className="courses-d">
              {categories.map((item, index) => (
                <button className="array-bt" key={index} onClick={setclick}>
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="courses-three">
            {courses.length > 0 ? (
              courses.map((item) => (
                <Course
                  key={item._id}
                  title={item.title}
                  description={item.description}
                  views={item.views}
                  imageSrc={item.poster.url}
                  id={item._id}
                  creator={item.createdBy}
                  lectureCount={item.numOfVideos}
                  addToPlaylistHandler={addToPlaylistHandler}
                />
              ))
            ) : (
              <h2>Course not found</h2>
            )}
            {/* <Course
              key={"hello"}
              title={"hello"}
              description={"hello"}
              views={"hello"}
              imageSrc={"hello"}
              id={"hello"}
              creator={"hello"}
              lectureCount={"hello"}
              addToPlaylistHandler={addToPlaylistHandler}
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
