import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Roots/Root";
import Home from "../Components/Home/Home";
import ManageMyItems from "../Pages/Manage My Items/ManageMyItems";
import Register from "../Pages/Auth/Register/Register";
import Login from "../Pages/Auth/Login/Login";
import PrivateRoute from "../Contexts/PrivateRoute";
import LostFoundDetails from "../Components/LostFound/LostFoundDetails";
import AllItems from "../Pages/All Items/AllItems";
import AddItems from "../Pages/Add Items/AddItems";
import Loading from "../Components/Loading/Loading";
import UpdateItems from "../Components/UpdateItems/UpdateItems";
import ErrorPage from "../Pages/Error Page/ErrorPage";
import RecoveredItems from "../Components/Recover Items/RecoveredItems";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/*",
        Component: ErrorPage,
      },
      {
        path: "auth/register",
        Component: Register,
      },
      {
        path: "auth/login",
        Component: Login,
      },
      {
        path: "allItems",
        loader: () => fetch("https://where-is-it-server-ten.vercel.app/allItems"),
        Component: AllItems,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "addItems",
        element: (
          <PrivateRoute>
            <AddItems></AddItems>
          </PrivateRoute>
        ),
      },
      {
        path: "myItems",
        element: (
          <PrivateRoute>
            <ManageMyItems></ManageMyItems>
          </PrivateRoute>
        ),
      },
      {
        path: "allItems/details/:id",
        loader: () => fetch("https://where-is-it-server-ten.vercel.app/allItems"),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <LostFoundDetails></LostFoundDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "updateItems/:id",
        loader: () => fetch("https://where-is-it-server-ten.vercel.app/allItems"),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <UpdateItems></UpdateItems>
          </PrivateRoute>
        ),
      },
      {
        path: "recoveredItems",
        element: (
          <PrivateRoute>
            <RecoveredItems></RecoveredItems>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
