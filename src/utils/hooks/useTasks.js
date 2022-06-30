import { useEffect, useReducer } from 'react';
import { TaskReducer } from '../reducers';

const init = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

export const useTasks = () => {

    const [ tasks, dispatch ] = useReducer( TaskReducer, [], init );

    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify( tasks ) );
    }, [tasks])

    const handleNewTask = ( task ) => {
        dispatch({
            type: '[ADD TASK]',
            payload: task
        });
    }

    const handleDeleteTask = ( id ) => {
        dispatch({
            type: '[REMOVE TASK]',
            payload: id
        });
    }

    const handleToggleTask = ( id ) => {
        dispatch({
            type: '[TOGGLE TASK]',
            payload: id
        });
    }

    return {
        tasks,
        totalTasks: tasks.length,
        pendingTasks: tasks.filter(task=> !task.done).length,
        handleNewTask,
        handleDeleteTask,
        handleToggleTask,
    }

}