import React, { useState } from "react";
import axios from "axios";

const updateResponse = async () => {
  const response = await axios.get("/example");
  console.log(response.data);
  return response.data;
};

const FetchButton = props => {
  const [response, setResponse] = useState("");
  return (
    <div>
      <button onClick={async () => setResponse(await updateResponse())}>
        Test Route
      </button>
      <h2>Response: {response}</h2>
    </div>
  );
};

export default FetchButton;
