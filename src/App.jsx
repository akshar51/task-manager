import React, { useState } from 'react'

const App = () => {

  const [task, setTask] = useState({});
  const [list, setList] = useState([]);
  const [category, setCategory] = useState([]);
  
  
  const handleChange = (e)=>{
    const {name,value} = e.target;
    let taskAdd = {...task,[name]:value}
    category.push(e.target.value)
    setTask(taskAdd);
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const listAdd = [...list,task]
    setList(listAdd)
  }

 

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className='text-center mt-4'>Task Manager</h1>
            <div className="form-content">
              <form method='post' onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="" className="form-label fw-bold fs-4">Add Task :</label>
                      <input type="text" 
                      className="form-control" 
                      id="task" 
                      name='tasks'
                      value={task.tasks}
                      onChange={handleChange}/>
                    </div>
                    <div className="spanBox d-flex justify-content-between gap-3">

                      <span
                      onClick={()=>handleChange({target :{ name:"category" ,value:'HTML/CSS'}})}
                      className='btn btn-warning text-white fw-semibold w-100 py-3'>
                        HTML / CSS
                      </span>

                      <span
                      onClick={()=>handleChange({target :{ name:"category" ,value:'BOOTSTRAP'}})} 
                      className='btn btn-success text-white fw-semibold w-100 py-3'>
                        BOOTSTRAP
                      </span>

                      <span
                      onClick={()=>handleChange({target :{ name:"category" ,value:'JAVASCRIPT'}})} 
                      className='btn btn-danger text-white fw-semibold w-100 py-3'>
                        JAVASCRIPT
                      </span>

                      <span
                      onClick={()=>handleChange({target :{ name:"category" ,value:'REACT'}})} 
                      className='btn btn-primary text-white fw-semibold w-100 py-3'>
                        REACT
                      </span>

                      <span
                      onClick={()=>handleChange({target :{ name:"category" ,value:'NODE JS'}})} 
                      className='btn btn-secondary text-white fw-semibold w-100 py-3'>
                        NODE JS
                      </span>
                    </div>
                    <button type="submit" className="btn btn-success mt-3 py-3 px-3 fw-bold">Add Task</button> 
               </form>
            </div>
            <div className="data-show mt-5">
              {list.map((val,idx)=>{
                return(
                   <div className="border mt-3 px-3 py-4 d-flex rounded" key={idx}>
                      <div className="fs-5 fw-bold me-auto">
                        <span className=''>{val.tasks}</span>
                      </div>
                      <div className="data-button">
                      <button type="button" className="btn btn-primary position-relative me-2">
                        {val.category}
                        <span className="position-absolute top-0 start-100 translate-middle bg-danger border border-light rounded-circle">
                          <i className="bi bi-x p-1" />
                        </span>
                      </button>
                      </div>
                    </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
