import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import api from './services/api';

function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('project').then(res => {
      setProjects(res.data);
    })
  }, [])

  function handleAddProject(){
    setProjects([...projects, `Project created in: ${Date.now()}`])
  }

  return (
    <>
      <Header title="React">
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              {project.title}
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
