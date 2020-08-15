const { ADD_TASK } = require("../../types/types")


type actionAddTaskType = {
    type: typeof ADD_TASK,
    payload: string | number | boolean
}
  export const actionAddTask = (newTask: any):actionAddTaskType => {
      return {
          type: ADD_TASK,
          payload: newTask
      }
  }