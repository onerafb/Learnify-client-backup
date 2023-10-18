import { server } from "../store";

import axios from "axios";

export const createCourse = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "createCourseRequest" });
    const { data } = await axios.post(`${server}/createcourse`, formData, {
      headers: {
        "Content-type": "multipart/form-data",
      },
      withCredentials: true,
    });
    dispatch({ type: "createCourseSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "createCourseFail",
      payload: "Course creation failed",
    });
  }
};

export const deleteCourse = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteCourseRequest" });
    const { data } = await axios.delete(`${server}/course/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: "deleteCourseSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteCourseFail",
      payload: "Course not deleted",
    });
  }
};

export const addLecture = (id, formdata) => async (dispatch) => {
  try {
    dispatch({ type: "addLectureRequest" });
    const { data } = await axios.post(`${server}/course/${id}`, formdata, {
      headers: {
        "Content-type": "multipart/form-data",
      },
      withCredentials: true,
    });
    dispatch({ type: "addLectureSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "addLectureFail",
      payload: "Lecture added",
    });
  }
};

export const deleteLecture = (courseId, lectureId) => async (dispatch) => {
  try {
    dispatch({ type: "deleteLectureRequest" });
    const { data } = await axios.delete(
      `${server}/lecture?courseId=${courseId}&lectureId=${lectureId}`,
      {
        withCredentials: true,
      }
    );
    dispatch({ type: "deleteLectureSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteLectureFail",
      payload: "Lecture deleted",
    });
  }
};
