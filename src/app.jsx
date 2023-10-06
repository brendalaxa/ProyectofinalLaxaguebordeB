import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="main">
      <Navbar />
      <ItemListContainer greatings="Hola estas en la mejor pagina con ideas para regalos !!" />
    </main>
  );
}

export default App;
