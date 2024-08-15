import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('converted to upper case', 'success')
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('converted to lower case', 'success')
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert('Text cleared', 'success')
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Text copied to clipboard!', 'success');
  };

  const handleExtraSpacesClick = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert('Extra spaces removed!', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="" style={{ color: props.mode === 'dark' ? 'white' : '#1c1c1c', marginTop:'20px' }}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h2>Enter you text</h2>
          </label>
          <textarea
            className="form-control mb-3"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === 'dark' ? '#2c2c2c' : 'white',
              color: props.mode === 'dark' ? 'white' : '#1c1c1c'
            }}
            onChange={handleOnChange}
          ></textarea>

          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
            Clear
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>
            Copy
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpacesClick}>
            Remove spaces
          </button>
        </div>
      </div>
      <div className="container m-5 my-3" style={{ color: props.mode === 'dark' ? 'white' : '#1c1c1c' }}>
        <h1>Your Text Summary</h1>
        <p>Number of words: {text.trim().split(/\s+/).filter((word) => word !== "").length}</p>
        <p>Number of characters: {text.length}</p>
        <h1>Preview</h1>
        <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
      </div>
    </>
  );
}