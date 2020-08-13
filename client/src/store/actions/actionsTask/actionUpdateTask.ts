import { UPDATE__TASK } from "../../types/types"

type actionUpdateTaskType = {
    type: typeof UPDATE__TASK,
    payload: string
}
export const actionUpdateTask = (updateTask: string): actionUpdateTaskType => {
    return {
        type: UPDATE__TASK,
        payload: updateTask
    }
}