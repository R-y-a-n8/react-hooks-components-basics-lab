import React from "react";

function NavBar (){
  return (
    <div>
       <h1>I`m a link!</h1>
    </div>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}



function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <h1>About</h1>
      <p>This is the About page content.</p>
    </div>
  );
}

export default App;
