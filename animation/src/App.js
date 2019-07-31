import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
        <div>
        <div>
        <title>Simple Fade-in/Fade-out animation</title>
        <h3>Simple fade-in/fade-out example</h3>
        fade = (btnElement) => {
            if (btnElement.value === "Fade Out") {
                document.getElementById("myImg").className = "fade-out";
                btnElement.value = "Fade In";
            }
            else {
                document.getElementById("myImg").className = "fade-in";
                btnElement.value = "Fade Out";
            }
          }
        <input id="myBtn" type="button" defaultValue="Fade Out" onclick="fade(this);" />
        <img id="myImg" src="https://image.flaticon.com/icons/svg/609/609624.svg" />
      </div>
        </div>
    </div>
  );
}

export default App;
