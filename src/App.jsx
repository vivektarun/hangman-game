import { Route, Routes } from "react-router-dom";

import StartGame from "./pages/StartGame/StartGame";
import PlayGame from "./pages/PalyGame/PalyGame";

function App() {
  return (
    // <div>
    //   <h1 className="font-semibold text-3xl">Welcome to Hangman</h1>
    //   <TextInputFormContainer onSubmit={(value) => console.log("Value coming from the hidden form is", value)} />
    // </div>

    <>
      <div>Navbar</div>
      <Routes>
        <Route path="/play" element={<PlayGame />} />
        <Route path="/start" element={<StartGame />} />
        <Route path="*" element={<div> not found </div>} />
      </Routes>
    </>
  );
}

export default App;
