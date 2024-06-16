import React, { useState } from "react";
function Textform({ heading }) {
  const [text, settext] = useState("Enter text here");
  const handleclick = () => {
    console.log("clicked");
    let newtext = text.toUpperCase();
    settext(newtext);
  };
  const handleonchange = (e) => {
    settext(e.target.value);
  };
  const handledownclick=()=>{
    let newtext=text.toLowerCase();
    settext(newtext)
  }
  
  return (
    <div>
      <div className="mb-3 mt-5">
        <h1>{heading}</h1>
        <textarea
          className="form-control"
          id="mybox"
          rows="7"
          value={text}
          onChange={handleonchange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleclick}>
        Uppercase
      </button> 
      
      <button className="btn btn-primary mx-2" onClick={handledownclick}>
        lowercase
      </button>
      <div className="container my-3">
        <h1>your text summary</h1>
        <p>{text.split(" ").length} words,{text.length}characters</p>
        <p>{0.008*text.split("").length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Textform;
