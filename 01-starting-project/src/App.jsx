function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

const randomSentences = [
  "React is a JavaScript library for building user interfaces.",
  "Components are the building blocks of React applications.",
  "State and props are essential concepts in React.",
  "React uses a virtual DOM to optimize rendering performance.",
  "Hooks allow you to use state and other React features without writing a class.",
];

const randSent = randomSentences[Math.floor(Math.random() * randomSentences.length)];

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}




function App() {
  return (
    <div>
      <Header />
      {/* <p>Dynamic sentence: {randSent}</p> */}
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcepts
              image="src/assets/components.png"
              title="Components"
              description="The building blocks of React applications."
              />
            <CoreConcepts />
            <CoreConcepts />
            <CoreConcepts />


          </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;
