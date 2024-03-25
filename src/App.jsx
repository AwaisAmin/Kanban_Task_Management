import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [openBoardModal, setOpenBoardModal] = useState(false);
  return (
    <>
      <Header
        openBoardModal={openBoardModal}
        setOpenBoardModal={setOpenBoardModal}
      />
    </>
  );
}

export default App;
