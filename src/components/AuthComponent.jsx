import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import Button from "@mui/material/Button";

const cookies = new Cookies();

const AuthComponent = () => {
  const [message, setMessage] = useState("");
  const token = cookies.get("TOKEN");

  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "https://pokemon-dashboard-server.herokuapp.com/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // make the API call
    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  const logout = () => cookies.remove("TOKEN", { path: "/" });

  return (
    <div className="text-center">
      <h1>Auth Component</h1>

      {/* displaying our message from our API call */}
      <h3 className="text-danger">{message}</h3>

      {/* logout */}
      <Button
        type="submit"
        fullWidth
        sx={{ mt: 3, mb: 2 }}
        onClick={() => logout()}
      >
        Logout
      </Button>
    </div>
  );
}


export default AuthComponent;