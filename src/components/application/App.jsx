import '../../global/styling/global.css';
let number = 0;
if (localStorage.getItem('number')) {
  number = localStorage.getItem('number');
}

function increase() {
  number++;
  localStorage.setItem('number', number);
  document.querySelector('#btn').innerHTML = number + " clicks";
}

function share() {
  window.open('https://scratch.mit.edu/discuss/topic/599594/#reply', '_blank');
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>React Clicker</h1>
      </div>
      <div className="btns">
        <button onClick={increase} id="btn">Click To Start</button>
        <button onClick={share} id="btn">Share your progress!</button>
      </div>
    </div>   
    );
}

export default App;
