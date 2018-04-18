export const ADD_TASK ='ADD_TASK';



 export const taskCreator = (task)=>{
return {
    type: ADD_TASK,
    payload:task, 
}
 }

 
 