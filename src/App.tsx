import React, { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div data-test="component-app">
      <h1>Deneme</h1>

      <h2 data-test="heading-item">head2</h2>
      {show && <p data-test="show">gözüküyor</p>}

      <button data-test="button" onClick={() => setShow(!show)}>
        buton
      </button>
      <footer data-test="footer"></footer>
    </div>
  );
}

export default App;
