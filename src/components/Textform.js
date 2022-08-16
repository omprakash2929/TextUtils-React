import React, {useState} from 'react'
// import propsType from "prop-types";


export default function Textform(props) {

  const uppercase = () =>{
    console.log("changecase was click" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Uppercae convert","success");
     
  }
  const lowercase = () =>{
    console.log("changecase was click" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Lowercase convert","success");
  }
  const cleartext = () =>{
    console.log("changecase was click" + text);
    let newtext = "";
    setText(newtext);
    props.showAlert("Clear all Text","success");
     
  }
  const TextBold = () =>{
    console.log("changecase was click" + text);
    let newtext = text.bold();
    setText(newtext);
     
  }

  const changecase = (event) =>{
   
    setText(event.target.value);
  }
  const [text, setText,]= useState('');

     // text= "change text" //Wrong way to change the state 
    //setText("New ompraksh");


  return (
    <>     
<div className="mb-6 container my-3 " style={{color:props.mode === 'dark'?'white':'black'}}>
    <h2>{props.heding} To analyze below </h2>

  <textarea className="form-control" id="mybox" style={{backgroundColor:props.mode === 'dark'?'rgb(13,23,33)':'white',color:props.mode === 'dark'?'white':'black'}} value={text} onChange={changecase} rows="8" ></textarea>
  <button className="btn btn-primary my-4"  onClick={uppercase}>Convert to uppercase</button>
  <button className="btn btn-primary my-4 mx-3"  onClick={lowercase}>Convert to lowercase</button>
  <button className="btn btn-primary my-4 mx-3"  onClick={cleartext}>Clear all Text</button>
  <button className="btn btn-primary my-4 mx-3"  onClick={TextBold}>Text Bold</button>
</div>


<div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p> {text.split(" ").length} word and  {text.length} charachters</p>
      <p> {0.008* text.split("").length} Minutes To read</p>
      <h2> Preview</h2>
      <p>{text}</p>
     </div>

    

    </>
  )
}
