import Sidebar from './components/Sidebar.jsx';
import Fallback from './components/Fallback.jsx';
import Form from './components/Form.jsx';
import { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    selectedProjectId: undefined,
    projects: []
  });
  
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

  function submitForm(){
    
  }

  let content;

  if(form.selectedProjectId === null){
    content = <Form onCancelForm={handleCancelForm}/>
  }else if(form.selectedProjectId === undefined){
    content = <Fallback onFillForm={handleFillForm}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onFillForm={handleFillForm} />
      {content}
    </main>
  );
}

export default App;