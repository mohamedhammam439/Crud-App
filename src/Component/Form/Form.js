import React from 'react';


const Form = (props) =>{
    return(
        <form className='formlist' onSubmit={props.AddCourse}>
            <input className='forminput' type='text' value={props.current} onChange={props.updateCourse} id='name' />
            <button>Add Course</button>
            
        </form>
    )
}
export default Form;