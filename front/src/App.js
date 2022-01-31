import AddEditContact from "./componantes/addEdit/AddEditContact";
import Home from "./componantes/home/Home";
import { Routes, Route } from "react-router-dom";
import List from "./componantes/cardList/List";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addedit_contact" element={<AddEditContact />} />
        <Route path="listof_contact" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
