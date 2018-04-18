import React,{Component} from 'react';
import {connect} from 'react-redux' ;
import { taskCreator}from './actions';
import AddedTask from "./addedTask";


class TodoList extends Component{ 
    constructor(props){
        super(props)
        this.state={
            task:''

        }
    }
eventHandler =(event)=>{this.setState({ [event.target.name]: event.target.value,  })}
render(){
    console.log('sh',this.state.task)
    return (
            <div>
                <button onClick={()=>{this.props.taskCreator(this.state.task) ; this.setState({task:''}) }}>Add a Task</button>
                <input 
                       placeholder=" Add A Task" 
                       value={this.state.task}
                       name="task"                     
                       onChange={this.eventHandler}
                 />
                
            </div>
)
}
}
 const mapStateToProps = state => {
             return {
                //  tasks: state.tasks
             };     
}
export default connect(mapStateToProps, {taskCreator})(TodoList);

