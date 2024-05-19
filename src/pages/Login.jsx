import React from "react";
import { signInWithPopup } from "firebase/auth";
import GoogleButton from "react-google-button";
import { auth, googleAuthProvider } from "../firebase";
import { useNavigate } from "react-router-dom";
import LoginParticles from "../components/LoginParticles";

const Login = () => {
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);
      localStorage.setItem("token", result.user.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative h-screen">
      <LoginParticles />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-8 z-10">NASA API Explorer</h1>
        <GoogleButton onClick={handleSignInWithGoogle} />
      </div>
    </div>
  );
};

export default Login;
