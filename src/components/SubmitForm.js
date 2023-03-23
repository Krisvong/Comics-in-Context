import React, { useContext } from "react";
import RequestFormButton from '../components/RequestFormButton'

export default function SubmitForm() {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        aligntItems: "center",
        height: "100vh"
        }}>
      <form style={{display: "inline-block"}}>
        <label>
          Name of Comic:
          <input type="text" />
        </label>
        <label>
          Year of Release:
          <input type="text" />
        </label>
        <label>
          Your Email:
          <input type="text" />
        </label>

        <RequestFormButton />
      
      </form> 
    </div>
  );
}