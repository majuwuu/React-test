import { Message } from "./components/message";


const App = () => {
  return (
    <div className="App">
      <Message title={"hola"} value={1}/>
      <Message title={"hola"} value={2}/>
      <Message title={"hola"} value={3}/>
    </div>
  );
}

export default App;
