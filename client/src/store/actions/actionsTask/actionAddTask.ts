const { ADD_TASK } = require("../../types/types")


type actionAddTaskType = {
    type: typeof ADD_TASK,
    payload: string
}
  export const actionAddTask = (newTask: string):actionAddTaskType => {
      return {
          type: ADD_TASK,
          payload: newTask
      }
  }