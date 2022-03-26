import './App.css';
import Guitter from './Component/Guitter/Guitter';

function App() {
  return (
    <div className="App">
      <h1 className='guitter-store'>Guitter Store</h1>
       <Guitter></Guitter>
       <div className='question-container'>
          <div>
          <h1>How react Work?</h1>
          <p>While building client-side apps, a team of Facebook  
            Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it’s worth keeping a DOM tree in it to speed up its manipulation.
            Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.
          </p>
          </div>
          <div>
          <h1>How state work?</h1>
          <p>The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders. The change in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render.</p>
          </div>
       </div>
    </div>
  );
}

export default App;
