import React from "react";
import "../Login.css";
import { FacebookOutlined } from "@ant-design/icons";
import firebase, { auth } from "../firebase";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>FB DM Messenger</h2>
        <div
          className="login-button facebook"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FacebookOutlined />
          Sign In with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
