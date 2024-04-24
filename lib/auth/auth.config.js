import CredentialsProvider from "next-auth/providers/credentials";
import { getCsrfToken } from "next-auth/react";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          required: true,
          label: "Username",
          type: "text",
          placeholder: "Enter your username",
        },
        password: {
          required: true,
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      authorize: async (credentials, req) => {
        console.log({ credentials, req });
        // here we should check csrf token to validate request
        const csrfToken = await getCsrfToken({
          req: {
            headers: req.headers,
          },
        });

        if (credentials.csrfToken === csrfToken) {
          console.log("The request is valid");
          console.log("This is the new token");
          return {
            username: "my-username",
            email: "my-email@mail.com",
            age: 30,
            place: "Guntur",
          };
        }

        // check username and password in credentials
        // check if username instance exists
        // check for password matching from instance
        return false;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    signIn: async (signInData) => {
      console.log("sign-in callback has been called");
      //   console.log({ signInData });
      const { account, credentials, user } = signInData;
      if (account.type === "credentials") {
        return user;
      }
      return false;
    },
    redirect: async (redirectData) => {
      //   console.log({ redirectData });
      return redirectData.url;
    },
  },
  events: {
    signOut: async (message) => {},
  },
};

export default authOptions;
