import React, { useState } from 'react'

const App = () => {

  const [task, setTask] = useState({
    tasks:"",
    category:[]
  })
  const [list, setList] = useState([]);
  

  const handleChange = (e)=>{
    const {name,value} = e.target;
    let taskAdd = {...task,[name]:value}
    setTask(taskAdd);
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const listAdd = [...list,task]
    setList(listAdd)
    setTask({
      tasks:"",
    category:[]
    })
  }

  const addCategory = (category)=>{
    if(!task.category.includes(category)){
        const newCat = [...task.category,category]
        setTask({...task,category:newCat})
    }
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
                      onClick={()=>addCategory()}
                      className='btn btn-warning text-white fw-semibold w-100 py-3'>
                        HTML / CSS
                      </span>

                      <span
                      onClick={()=>addCategory(<i className="fa-brands fa-bootstrap text-white"></i>)} 
                      className='btn btn-success text-white fw-semibold w-100 py-3'>
                        BOOTSTRAP
                      </span>

                      <span
                      onClick={()=>addCategory(<i className="bi bi-javascript text-warning"></i>)} 
                      className='btn btn-danger text-white fw-semibold w-100 py-3'>
                        JAVASCRIPT
                      </span>

                      <span
                      onClick={()=>addCategory(<i className="fa-brands fa-react text-white"></i>)} 
                      className='btn btn-primary text-white fw-semibold w-100 py-3'>
                        REACT
                      </span>

                      <span
                      onClick={()=>addCategory(<i className="fa-brands fa-node-js text-white"></i>)} 
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
                        {
                          val.category.map((item,idx)=>{
                            return(
                            <button key={idx} type="button" className="border position-relative mx-2 fs-5 rounded-circle bg-dark px-2 py-1">
                            {item}
                            <span className="position-absolute 
                            top-0 start-100 
                            translate-middle 
                            border-light ">
                              <i className="bi bi-x text-white" />
                            </span>
                          </button>
                            )
                          })
                        }
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
