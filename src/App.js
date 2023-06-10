import react, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  // fn handleClick

  const handleClick = (e) => {
    setResult(result.concat(e.target?.name));
  };

  //fn effaceur
  const efface = () => {
    setResult("");
  };

  // fn retour

  const retour = () => {
    setResult(result?.slice(0, -1));
  };

  // fn calcul
  const calcul = () => {
    try {
      setResult(Number(eval(result).toString()).toFixed(2));
    } catch (error) {
      setResult("format invalide");
    }
  };

  return (
    <>
      <div class="container">
        <h1 class="titre">Calculatrice en react</h1>
        <div class="Calculatrice">
          <input type="text" class="espaceAffichage" value={result} />
          <div class="espace-touches">
            <button onClick={efface} class="btn clear span-2">
              C
            </button>
            <button onClick={retour} class="btn orange">
              &larr;
            </button>
            <button onClick={handleClick} name="/" class="btn orange">
              &divide;
            </button>
            <button onClick={handleClick} name="7" class="btn">
              7
            </button>
            <button onClick={handleClick} name="8" class="btn">
              8
            </button>
            <button onClick={handleClick} name="9" class="btn">
              9
            </button>
            <button onClick={handleClick} name="*" class="btn orange">
              &times;
            </button>
            <button onClick={handleClick} name="4" class="btn">
              4
            </button>
            <button onClick={handleClick} name="5" class="btn">
              5
            </button>
            <button onClick={handleClick} name="6" class="btn">
              6
            </button>
            <button onClick={handleClick} name="-" class="btn orange">
              &ndash;
            </button>
            <button onClick={handleClick} name="1" class="btn">
              1
            </button>
            <button onClick={handleClick} name="2" class="btn">
              2
            </button>
            <button onClick={handleClick} name="3" class="btn">
              3
            </button>
            <button onClick={handleClick} name="+" class="btn orange">
              +
            </button>
            <button onClick={handleClick} name="0" class="btn span-3">
              0
            </button>
            <button onClick={calcul} class="btn orange equal">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
