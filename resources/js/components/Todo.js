import React, { useState, useEffect } from 'react'


function Todo({text, setTodos, todos, todo, pic, 
  birth, email, gender,position, password, complete}) {

    const [pass, setPass] = useState('')
    const [toinput, setTodoInpit] = useState('')

    useEffect(() => {
      setPass(password)
    })

    const deleteFn = () =>{
     
        if(toinput === pass){
          setTodos(todos.filter((el) => el.id !== todo.id)) 
          setPass('')

          alert('Delete!')  
        } else {
          alert('Password is incorrect!')
          setPass('')
        }
    }

    console.log(deleteFn)

    const completeFn = () => {
        setTodos(
          todos.map((item) => {
            if (item.id === todo.id) {
              return {
                ...item,
                complete: !item.complete,
              }
            }
            return item;
          })
        );
      };

      console.log(todo)
    return (
        <div className='todo__con'>
            <img src={pic} alt=""/>
           
            <p> <strong>Name : </strong>  <mark>{text}</mark></p>
            <p><strong>Email : </strong>  {email}</p>
            <p> <strong>Gender : </strong>  {gender}</p>
            <p><strong>Position : </strong> <mark> {position}</mark></p>
            <p><strong>Date of birth : </strong>  {`${birth}`}  </p>

            <div className="btn__employee">
              {complete ? 
               <button onClick={completeFn} >BACK EMPLOYEE TO TRAINEE</button>:
               <button onClick={completeFn} >ADD TO EMPLOYEE</button>
            }
           
            </div>
            <div className="btn__delete">
           <input placeholder='enter password for delete' type="password" value={toinput} onChange={e => setTodoInpit(e.target.value)}  />
            <button onClick={deleteFn} >Delete</button>

            </div>
        </div>
    )
}

export default Todo