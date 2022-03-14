import React, { useState } from "react";
import TitleField from "./Components/TitleField/TitleField";

function App() {
  return (
    <div data-test="component-app">
      <TitleField title="test" />
    </div>
  );
}

export default App;
