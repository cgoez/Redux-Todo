import React,{Component} from 'react';
import { connect } from 'react-redux';

class AddedTask extends Component{  
     constructor(props){
         super(props)      
     }
render(){
    console.log('hilal',this.props)
return (
    <div>  
        {this.props.task.map(( t, i) => {return<div key={i}>{t}</div>})}
    </div>

)
}
}
const mapStateToProps = state => {
  
    return {
        task: state.addTasks || []
    };
}
export default connect(mapStateToProps, {})(AddedTask);




