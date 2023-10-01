import React from "react";
import useGlobalStore from "../STORE/GlobalStore";
import { useHistory } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const navigate = useHistory();
  const { user } = useGlobalStore((state) => state);
  if (!user) {
    console.log("bot login");
    return navigate.push("/login");
  }

  return children;
};
