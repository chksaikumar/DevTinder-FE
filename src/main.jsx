import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import Error from "./components/Error.jsx";
import { Provider } from "react-redux";
import Appstore from "./redux/store.js";
import Feed from "./components/feed.jsx";
import Friends from "./components/Friends.jsx";
import ConnectionReceived from "./components/ConnectionReceived.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Feed /> },
      { path: "/login", element: <Login /> },
      { path: "/profile", element: <Profile /> },
      { path: "friends", element: <Friends /> },
      { path: "/requests", element: <ConnectionReceived /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Appstore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
