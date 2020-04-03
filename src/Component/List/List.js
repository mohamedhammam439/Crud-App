import React, { Component,Fragment } from 'react';


class List extends Component{

    state={
        isEdit : false
    }

    // toggleCourse
    toggleCourse=()=>{
        let {isEdit}=this.state;
        this.setState({
            isEdit : !isEdit
        })
    }


    // rendercourse
    renderCourse=()=>{
        return(
            <li>
                <span>{this.props.details.name}</span>    
                <button onClick={ ()=> {this.props.DeleteCourse(this.props.index)}}>Delete</button>
                <button onClick={ ()=> {this.toggleCourse()}} >Edit</button>
            </li>
        )
    }

    // updatecourse
    updatecourse=(e)=>{
        e.preventDefault();
        this.props.editCourseItem(this.props.index ,this.input.value);
        this.toggleCourse();

    }



    // editeCourse
    editeCourse=()=>{
        return(
            <form onSubmit={this.updatecourse}>
                <input type='text' defaultValue={this.props.details.name} ref={(v)=> {this.input = v} } />
                <button>Update</button>
            </form>
        )
    }


    render(){
        let isEdit=this.state.isEdit;
        return(
            <Fragment>
               { isEdit ? this.editeCourse() : this.renderCourse() }
                
            </Fragment>
        )
    }
}
export default List;