import "./App.css";
import mainImage from "./images/illustration-woman-online-desktop.svg";
import box from "./images/illustration-box-desktop.svg";
import dropDown from "./images/icon-arrow-down.svg";
import pattern from "./images/bg-pattern-desktop.svg"

function App() {
  return (
    <main>
      <div class="top-div">
        <div class="imageDiv">
          <div class="images">
            <img src={box} class="imageBox" alt="imageBox"></img>
            <img src={pattern} class="pattern" alt="pattern"></img>
            <img src={mainImage} class="imageMain" alt="imageMain"></img>
          </div>
        </div>
        <div class="top-questions">
          <h1>FAQ</h1>
          <p>1 How many team members can I invite?</p>
          <img src={dropDown} alt="image"></img>
          {/* <p>1 Around 10 million</p> */}

          <p>2 How many team members can I invite?</p>
          <img src={dropDown} alt="image"></img>
          {/* <p>2 Around 10 million</p> */}

          <p>3 How many team members can I invite?</p>
          <img src={dropDown} alt="image"></img>
          {/* <p>3 Around 10 million</p> */}

          <p>4 How many team members can I invite?</p>
          <img src={dropDown} alt="image"></img>
          {/* <p>4 Around 10 million</p> */}

          <p>5 How many team members can I invite?</p>
          <img src={dropDown} alt="image"></img>
          {/* <p>5 Around 10 million</p> */}
        </div>
      </div>
    </main>
  );
}

export default App;
