import { taskService } from '../../services/task.service'

export function getActionBoard(task) {
  return {
    type: 'SET_TASK',
    task,
  }
}

export function getActionUpdateBoard(savedTask) {
  return {
    type: 'SET_TASK',
    task: savedTask,
  }
}

export function loadTask(taskId) {
  return async (dispatch) => {
    try {
      const task = await taskService.getById(taskId)
      dispatch(getActionBoard(task))
    } catch (err) {
      console.log('Cannot load task', err)
    }
  }
}
