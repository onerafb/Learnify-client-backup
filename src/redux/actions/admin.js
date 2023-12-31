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

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllUsersRequest" });
    const { data } = await axios.get(`${server}/admin/users`, {
      withCredentials: true,
    });
    dispatch({ type: "getAllUsersSuccess", payload: data.users });
  } catch (error) {
    dispatch({
      type: "getAllUsersFail",
      payload: "Users not fetched",
    });
  }
};

export const upadateUserRole = (id) => async (dispatch) => {
  try {
    dispatch({ type: "updateUserRoleRequest" });
    const { data } = await axios.put(
      `${server}/admin/user/${id}`,
      {},
      {
        withCredentials: true,
      }
    );
    dispatch({ type: "updateUserRoleSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "updateUserRoleFail",
      payload: "Users not fetched",
    });
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteUserRequest" });
    const { data } = await axios.delete(`${server}/admin/user/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: "deleteUserSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteUserFail",
      payload: "Users not fetched",
    });
  }
};
