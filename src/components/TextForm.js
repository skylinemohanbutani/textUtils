import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpcClick = () => {
    // console.log("UpperCase Button CLicked" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Upper case', 'success')
  };
  const handleLwcClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lower case', 'success')
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Clear text from Text-area', 'success')
  };
  const handleOnChange = (event) => {
    // console.log("onchange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1 className="heading">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "rgb(92 94 96)",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
          <button
            className={`btn btn-${props.mode === "light" ? "primary" : "dark"} my-2 mx-1`}
            onClick={handleUpcClick}
          >
            Convert to Uppercase
          </button>
          <button
            className={`btn btn-${props.mode === "light" ? "primary" : "dark"} my-2 mx-1`}
            onClick={handleLwcClick}
          >
            Convert to Lowercase
          </button>
          <button
            className={`btn btn-${props.mode === "light" ? "primary" : "dark"} my-2 mx-1`}
            onClick={handleClearClick}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summery</h2>
        <p>
          This upper paragraph contains {text.split(" ").length} words and{" "}
          {text.length} charactors
        </p>
        <p>
          You need to {0.008 * text.split(" ").length} minutes to read this
          whole text
        </p>
        <h3>Preview of Above Text</h3>
        <p>{text.length>0?text:'Please enter text in text-area to show preview here.'}</p>
      </div>
    </>
  );
}
