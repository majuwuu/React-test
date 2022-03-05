import { Message } from "./components/message";


function App() {
  return (
    <div className="App">
      <Message title={"hola"} value={"Has presionado el boton 1"}/>
      <Message title={"hola"} value={"Has presionado el boton 2"}/>
      <Message title={"hola"} value={"Has presionado el boton 3"}/>
    </div>
  );
}

export default App;
