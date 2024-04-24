"use client";

import { useState } from "react";
import { TextInput, Button, Label, Alert } from "flowbite-react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

function LoginAlert({ error }) {
  console.log("error occured here");
  switch (error) {
    case "CredentialsSignin":
      return (
        <Alert color="failure">Either username or password is incorrect</Alert>
      );
  }
}

function LoginForm() {
  console.log("I am from LoginFrom Client Component");
  const searchParams = useSearchParams();
  const [isLogging, setIsLogging] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginFormSubmission = async (event) => {
    event.preventDefault();
    setIsLogging(true);
    await signIn("credentials", {
      redirect: true,
      callbackUrl: "/cheeti-paatalu",
      username,
      password,
    });
  };

  return (
    <div className="login-form px-4 py-2">
      <h1 className="text-center text-4xl mb-2">Login</h1>
      {searchParams && searchParams.size > 0 && searchParams.has("error") && (
        <LoginAlert error={searchParams.get("error")} />
      )}
      <form onSubmit={handleLoginFormSubmission}>
        <div className="mb-3">
          <div className="mb-2 block">
            <Label htmlFor="username" value="Username" className="font-bold" />
          </div>
          <TextInput
            required={true}
            id="username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter Username"
          />
        </div>
        <div className="mb-3">
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" className="font-bold" />
          </div>
          <TextInput
            required={true}
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter Password"
          />
        </div>
        <Button
          className="mb"
          type="submit"
          isProcessing={isLogging}
          disabled={isLogging}
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
