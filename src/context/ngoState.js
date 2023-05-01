import React, { useState } from "react";
import NgoContext from "./ngoContext";

export default function NgoState(props) {
  const host = "http://localhost:8080";
  const initialNgoList = [];
  let ngol = [];
  const [ngo, setNgo] = useState(initialNgoList);

  const getNgos = async () => {
    const url = `${host}/api/v1/ngos/`;
    const response = await fetch(url, {
      method: "GET",
    });
    const json = await response.json();
    setNgo(json);
  };

  const addNgo = async (name, email, tel, description, quantity) => {
    const url = `${host}/api/v1/ngos/`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, tel, description, quantity }),
    });

    const ngo = await response.json();
    console.log(ngo);

    setNgo((prev) => {
      return [...prev, ngo];
    });
  };

  return (
    <NgoContext.Provider
      value={{
        ngo,
        getNgos,
        addNgo,
      }}
    >
      {props.children}
    </NgoContext.Provider>
  );
}
