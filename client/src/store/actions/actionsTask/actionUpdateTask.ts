import { UPDATE__TASK } from "../../types/types"

type actionUpdateTaskType = {
    type: typeof UPDATE__TASK,
    payload: string | boolean | number
}
export const actionUpdateTask = (updateTask: any): actionUpdateTaskType => {
    return {
        type: UPDATE__TASK,
        payload: updateTask
    }
}