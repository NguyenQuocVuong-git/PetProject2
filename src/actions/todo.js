export const addNewTodo = (todo) => {
    return {
        type : 'ADD_TODO',
        payload : todo,
    }
}

export const setActiveTodo = (todo) => {
    return {
        type : 'SET_DEACTIVE_TODO',
        payload : todo,
    }
}

export const deleteTodo = (todo) => {
    return {
        type : 'DELETE_ITEM',
        payload : todo,
    }
}

export const openForm = () => {
    return {
        type : 'OPEN_FORM'
    }
}

export const closeForm = () => {
    return {
        type : 'CLOSE_FORM'
    }
}