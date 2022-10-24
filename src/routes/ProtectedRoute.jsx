import React from "react";
import { Component } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
// import auth from "./auth";

export const ProtectedRoute = () => {
  let auth;
  const user = JSON.parse(sessionStorage.getItem("user"));

  if (user) {
    auth = true;
  } else {
    auth = false;
  }

  return auth ? <Outlet /> : <Navigate to="/signin" />;
};
