import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./createcourses.css";
// import Navbar from "../../components/Navbar/Navbar";
import { createCourse } from "../../redux/actions/admin";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import toast from "react-hot-toast";

const CreateCourse = () => {
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.admin);

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setimageprev(reader.result);
      setimage(file);
    };
  };

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [createdBy, setcreatedby] = useState("");
  const [category, setcategory] = useState("");
  const [image, setimage] = useState("");
  const [imageprev, setimageprev] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("category", category);
    myForm.append("createdBy", createdBy);
    myForm.append("file", image);
    dispatch(createCourse(myForm));
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
  }, [dispatch, error, message]);

  const categories = [
    "Web Development",
    "Game Development",
    "Artificial Intelligence",
    "Data Structure",
    "App Development",
    "Data Science",
  ];
  return (
    <section className="c-courses">
      {/* <Navbar /> */}
      <div className="c-courses-main">
        <div className="c-courses-main-one">
          <form className="c-courses-form" onSubmit={submitHandler}>
            <input
              type="text"
              onChange={(e) => settitle(e.target.value)}
              placeholder="Enter Title"
              value={title}
              className="c-courses-input"
              required
            />
            <input
              type="text"
              onChange={(e) => setdescription(e.target.value)}
              placeholder="Enter Description"
              value={description}
              className="c-courses-input"
              required
            />
            <input
              type="text"
              onChange={(e) => setcreatedby(e.target.value)}
              placeholder="Creator name"
              value={createdBy}
              className="c-courses-input"
              required
            />
            <select
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              className="c-courses-select"
            >
              <option value="">Category</option>
              {categories.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <input
              type="file"
              accept="image/*"
              onChange={changeImageHandler}
              className="c-courses-choose"
            />
            {imageprev && (
              <div className="c-courses-img-prev-div">
                <img src={imageprev} className="c-courses-imgprev" />
              </div>
            )}
            <button type="submit" className="c-courses-bt">
              Create
            </button>
          </form>
        </div>
        <div className="c-courses-main-two">
          <Sidebar />
        </div>
      </div>
    </section>
  );
};

export default CreateCourse;
