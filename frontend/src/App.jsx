import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import api from './services/api';

function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(res => {
      setProjects(res.data);
    })
  }, [])

  async function handleAddProject(){
    const response = await api.post('projects', {
      title: "Projeto estático",
      dev: "Kalmax"
    })

    const project = response.data;

    setProjects([... projects, project]);
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
