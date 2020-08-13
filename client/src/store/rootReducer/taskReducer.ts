import { ADD_TASK, UPDATE__TASK } from "../types/types";


type taskTypes = {
    title: string,
    description: string,
    taskId: number,
    categoryId: number,
    done: boolean
}
const initialState = {
    task: [
        {title: "Milk", description: 'одеться тепло',  taskId: 1, categoryId: 1, done: true},
        {title: "Goood", description: 'одеться тепло',  taskId: 2, categoryId: 1, done: false}
    ]as Array<taskTypes>,
}
type initialStateType  = typeof initialState;

const taskReducer = (state = initialState, action: any):initialStateType => {
    switch (action.type) {
        case ADD_TASK:
            return {...state, task: [...state.task, action.payload]}
        case UPDATE__TASK:
             return {...state, task: state.task.map((item)=> item.taskId === action.payload.taskId ? {...item, ...action.payload} : item)}
        default:
            return state;
    }
}
export default taskReducer;