import React, { Component } from 'react';
import Form from './Component/Form/Form';
import List from './Component/List/List';
import './App.css';


class App extends Component{

  state={
    courses: [
      {name:'English'},
      {name:'Arabic'},
      {name:'French'},
    ], current:''
  }


  // updateCourse
  updateCourse=(e)=>{
    this.setState({
      current:e.target.value
    })

  }


  // AddCourse
  AddCourse=(e)=>{
    e.preventDefault();
    if (e.target.name.value === '') {        // why must get id for this condition ?? (e.target = input )  (name = id of input in form)
      return false                           // why we don't wright e.target.value onlyyyyyyyyyy ???!!
    }else {                                 // what is the diffrent between - e.target.value & - e.target.name.value & - e.target.elements.name.value ??
      let current=this.state.current;
      let courses=this.state.courses;
      courses.push({name:current})
      this.setState({
        courses ,
        current:''
      })
    }
  
  }


  // DeleteCourse
  DeleteCourse=(index)=>{
    let courses=this.state.courses;
    courses.splice(index,1)
    this.setState({
      courses
    })
  }


  // editCourseItem
  editCourseItem=(index,value)=>{
    let courses=this.state.courses;
    let course=courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }


  render() {
    const {courses}=this.state;
    const legnth=courses.length;
    const courselist=legnth ? (courses.map((course,index)=>{
      return <List details={course} key={index} DeleteCourse={this.DeleteCourse} index={index} editCourseItem={this.editCourseItem} />
    })):(
      <p>There Is No Courses To Show</p>
    )
    return(
      <section>
        <h1>What Do You Want To Learn?</h1>
        <Form  updateCourse={this.updateCourse} AddCourse={this.AddCourse} current={this.state.current} />
        <ul>{courselist}</ul>
      </section>
    )
  }
 
}

export default App;
