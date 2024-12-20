import Sidebar from './components/Sidebar.jsx';
import Fallback from './components/Fallback.jsx';
import Form from './components/Form.jsx';
import Project from './components/Project.jsx';
import { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text){
    setForm(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });    
  }

  function handleDeleteTask(id){
    setForm(prevState => {
      return{
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id)
      };
    });
  }

  function handleSelectProject(id){
    setForm((prevState) => {
      return{
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  
  function handleFillForm(){
    setForm((prevState) => {
      return{
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelForm(){
    setForm((prev) => {
      return{
        ...prev,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSubmitForm(formData){
    setForm(prevState => {
      const newProject = {
        ...formData,
        id: Math.random()
      };

      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  function handleDeleteProject(){
    setForm((prev) => {
      return{
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter(project => project.id !== prev.selectedProjectId) 
      };
    });
  }

  const selectedProject = form.projects.find(project => project.id === form.selectedProjectId);

  let content = <Project 
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={form.tasks}
    />;

  console.log(form.projects);

  if(form.selectedProjectId === null){
    content = <Form onCancelForm={handleCancelForm} onAdd={handleSubmitForm} />
  }else if(form.selectedProjectId === undefined){
    content = <Fallback onFillForm={handleFillForm}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar 
        onFillForm={handleFillForm}
        data={form.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={form.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;