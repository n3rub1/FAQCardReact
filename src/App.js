import "./App.css";
import mainImage from "./images/illustration-woman-online-desktop.svg";
import box from "./images/illustration-box-desktop.svg";
import dropDown from "./images/icon-arrow-down.svg";
import pattern from "./images/bg-pattern-desktop.svg"
import React from "react";

function App() {

  const [arrow, setArrow] = React.useState({
    arrow1: false,
    arrow2: false,
    arrow3: false,
    arrow4: false,
    arrow5: false,
  })

  function handleClick(id) {
    setArrow((prev) => {
      console.log(id, prev[id])
      return { ...prev, [id]: (prev[id] ? false : true) }
    })
  }

  return (
    <main>
      <div className="top-div">
        <div className="imageDiv">
          <div className="images">
            <img src={box} className="imageBox" alt="imageBox"></img>
            <img src={pattern} className="pattern" alt="pattern"></img>
            <img src={mainImage} className="imageMain" alt="imageMain"></img>
          </div>
        </div>
        <div className="top-questions">
          <h1>Silly Puns; laugh from cringe</h1>
          <p className="question">Hear about the new restaurant called Karma?</p>
          <img className={`arrow ${arrow.arrow1 ? "down" : ""} `} src={dropDown} alt="image1" onClick={() => handleClick("arrow1")}></img>
          {arrow.arrow1 && <p className="answer">There's no menu: You get what you deserve.</p>}

          <p className="question">Did you hear about the claustrophobic astronaut?</p>
          <img className={`arrow ${arrow.arrow2 ? "down" : ""} `} src={dropDown} alt="image2" onClick={() => handleClick("arrow2")}></img>
          {arrow.arrow2 && <p className="answer">He just needed a little space.</p>}

          <p className="question">Why don’t scientists trust atoms?</p>
          <img className={`arrow ${arrow.arrow3 ? "down" : ""} `} src={dropDown} alt="image3" onClick={() => handleClick("arrow3")}></img>
          {arrow.arrow3 && <p className="answer">Because they make up everything.</p>}

          <p className="question">What does a nosy pepper do?</p>
          <img className={`arrow ${arrow.arrow4 ? "down" : ""} `} src={dropDown} alt="image4" onClick={() => handleClick("arrow4")}></img>
          {arrow.arrow4 && <p className="answer">Gets jalapeño business!</p>}

          <p className="question">What do you call a fake noodle?</p>
          <img className={`arrow ${arrow.arrow5 ? "down" : ""} `} src={dropDown} alt="image5" onClick={() => handleClick("arrow5")}></img>
          {arrow.arrow5 && <p className="answer">An impasta.</p>}
        </div>
      </div>
    </main>
  );
}

export default App;
