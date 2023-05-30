import { useMemo, useState } from "react";
import "./styles.css";

const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 150;

export default function App() {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  function onHeightChange(event) {
    const inputHeight = event.target.value;
    setHeight(inputHeight);
  }

  function onWeightChange(event) {
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  }

  const output = useMemo(() => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <main>
      <h1>Project: CALCULATEUR D'IMC</h1>
      
      <div className="input-section">
        <p class="slider-output">Poids: {weight} kg</p>
        <input
          className="input-slider"
          onChange={onWeightChange}
          type="range"
          step="1"
          min="40"
          max="220"
        />
        <p class="slider-output">Taille en hauteur: {height} cm</p>
        <input
          className="input-slider"
          onChange={onHeightChange}
          type="range"
          min="140"
          max="220"
        />
      </div>
      <div className="output-section">
        <h3>Indice de masse corporelle</h3>
        <p>Votre IMC est de</p>
        <p className="output">{output}</p>

        
      </div>
      <div className="table-section">
        <h3>Tableau de classification de l'OMS</h3>
        <table>
          <thead>
            <tr>
              <th>IMC</th>
              <th>Classification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>&lt; 18,5</td>
              <td>Insuffisance pondérale</td>

            </tr>
            <tr>
              <td>18,5 - 24,9</td>
              <td>Poids normal</td>
            </tr>
            <tr>
              <td>25 - 29,9</td>
              <td>Surpoids</td>
            </tr>
            <tr>
              <td>30 - 34,9</td>
              <td>Obésité modérée</td>
            </tr>
            <tr>
              <td>35 - 39,9</td>
              <td>Obésité sévère</td>
            </tr>
            <tr>
              <td>&gt; 40</td>
              <td>Obésité morbide ou massive</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
