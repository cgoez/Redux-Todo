import { ADD_TASK } from './actions';


const addTasksReducer = (tasks = [ 'test', 1 , 2] ,action)=>{
    switch(action.type){
        case ADD_TASK:
            return  [...tasks, action.payload]
        default:
            return tasks;
   }
}
export { addTasksReducer };