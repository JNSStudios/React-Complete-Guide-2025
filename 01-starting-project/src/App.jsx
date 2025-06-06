import TabButton from "./TabButton";
import { useState, Fragment } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";


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

function CoreConcept({title, description, image}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  const [ tabContent, updateTabContent ] = useState('');

  function handleSelection(button){
    updateTabContent(button);
    console.log("Updated to ", button);
  }

  return (
    <>
      <Header />
      {/* <p>Dynamic sentence: {randSent}</p> */}
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map( (concept) => (
              <CoreConcept 
                key={concept.title} 
                {...concept}
              />
            ))}
          </ul>
        </section>

        {/* Examples Section */}
            
        <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => handleSelection('components')}>Components</TabButton>
              <TabButton onSelect={() => handleSelection('jsx')}>JSX</TabButton>
              <TabButton onSelect={() => handleSelection('props')}>Props</TabButton>
              <TabButton onSelect={() => handleSelection('state')}>State</TabButton>
            </menu>
            
              {tabContent && (
                <div id="tab-content">
                  <h3>{EXAMPLES[tabContent].title}</h3>
                    <p>{EXAMPLES[tabContent].description}</p>
                    <pre>
                      <code>
                        {EXAMPLES[tabContent].code}                  
                      </code>
                    </pre>
                 </div>
              )}
              {!tabContent && (
                <div id="tab-content">
                    <p>Please choose a topic.</p>
                </div>
              )}
        </section>
      </main>
    </>
  );
}

export default App;
