import React, { useState } from 'react';
import Header from './components/Header';

function App() {

  const [projects, setProjects] = useState(["Facebook", "Uber"]);

  function handleAddProject(){
    setProjects([...projects, `Project created in: ${Date.now()}`])
  }

  return (
    <>
      <Header title="React">
        <ul>
          {projects.map(project => (
            <li key={project}>
              {project}
            </li>
          ))}
        </ul>
      </Header>

      <button type="button" onClick={handleAddProject}>
        Adiconar projeto
      </button>
    </>
  );
}

export default App;
