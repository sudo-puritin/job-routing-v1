import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [success, setSuccess] = useState(false);
  const [userData, setUserData] = useState();

  const onSubmit = (data) => {
    setSuccess(true);
    setUserData(data);

    // setError("afterSubmit", { message: "Server Response Error" });
  };

  return (
    <LoginContext.Provider value={{ onSubmit, success, setSuccess, userData }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);

export default LoginContextProvider;
