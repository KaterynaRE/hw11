import { createContext, useEffect, useState } from "react";
import { account } from "../utils/appwrite";
import { ID } from "react-native-appwrite";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  async function getAuthCheckedStatus() {
    try {
      const response = await account.get();
      setUser(response);
      //console.log("User is authenticated", response);
    } catch (error) {
      console.log(error.message);
    } finally {
      setAuthChecked(true);
    }
  }
  useEffect(() => {
    getAuthCheckedStatus();
  }, []);

  const register = async (email, password) => {
    try {
      await account.create({
        userId: ID.unique(),
        email,
        password,
      });
      await login(email, password);
    } catch (error) {
      throw Error(error.message);
    }
  };

  const login = async (email, password) => {
    try {
      const sessionData = await account.createEmailPasswordSession({
        email: email,
        password: password,
      });
      console.log("Session created", sessionData);
      var resp = await account.get();
      console.log("User data", resp);
      setUser(resp);
    } catch (error) {
      throw Error(error.message);
    }
  };
  const logout = async () => {
    console.log("LOg out fired!");
    try {
      await account.deleteSession({
        sessionId: "current",
      });
      setUser(null);
      console.log("User is logged out!", user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        authChecked,
        getAuthCheckedStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
