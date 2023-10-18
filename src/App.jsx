import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Register";
import Forgetpass from "./components/Auth/Forgetpass";
import Resetpass from "./components/Auth/Resetpass";
import Contact from "./components/Contact/Contact";
import Request from "./components/Request/Request";
import Subscribe from "./components/Payment/Subscribe";
import PaymentSuccess from "./components/Payment/PymentSuccess";
import PaymentFail from "./components/Payment/PaymentFail";
import NotFound from "./components/Payment/NotFound";
import CoursePage from "./CoursePage/CoursePage";
import Profile from "./components/Profile/Profile";
import ChangePassword from "./components/Profile/ChangePassword";
import UpdateProfile from "./components/Profile/UpdateProfile";
import AdminCourses from "./Admin/AdminCourses/AdminCourses";
import CreateCourses from "./Admin/CreateCourses/CreateCourses";
import Users from "./Admin/Users/Users";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/user";
import { ProtectedRoute } from "protected-route-react";
const App = () => {
  // window.addEventListener("contextmenu", (e) => {
  //   e.preventDefault();
  // });

  const { isAuthenticated, user, error, message, loading } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <Router>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar isAuthenticated={isAuthenticated} user={user} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Profile user={user} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/course/:id"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <CoursePage user={user} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect="/profile"
                  >
                    <Login />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect="/profile"
                  >
                    <Register />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/changepassword"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <ChangePassword />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/updateprofile"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <UpdateProfile user={user} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/subscribe"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Subscribe user={user} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/createcourses"
                element={
                  <ProtectedRoute
                    adminRoute={true}
                    isAuthenticated={isAuthenticated}
                    isAdmin={user && user.role === "admin"}
                  >
                    <CreateCourses />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/admincourses"
                element={
                  <ProtectedRoute
                    adminRoute={true}
                    isAuthenticated={isAuthenticated}
                    isAdmin={user && user.role === "admin"}
                  >
                    <AdminCourses />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/users"
                element={
                  <ProtectedRoute
                    adminRoute={true}
                    isAuthenticated={isAuthenticated}
                    isAdmin={user && user.role === "admin"}
                  >
                    <Users />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/forgetpassword"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect="/profile"
                  >
                    <Forgetpass />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/resetpassword/:token"
                element={
                  <ProtectedRoute
                    isAuthenticated={!isAuthenticated}
                    redirect="/profile"
                  >
                    <Resetpass />
                  </ProtectedRoute>
                }
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/request" element={<Request />} />
              <Route path="/paymentsuccess" element={<PaymentSuccess />} />
              <Route path="/paymentfail" element={<PaymentFail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
          </>
        )}
      </Router>
    </>
  );
};

export default App;
