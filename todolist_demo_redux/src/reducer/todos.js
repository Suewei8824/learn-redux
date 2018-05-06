function todos(state = [], action) {
    switch (action.type) {
        case 'addTodo':
            return state.concat({
                id: action.payload.id.toString(),
                text: action.payload.text,
                completed: false
            })
        case 'deleteTodo':
            return state.filter(todo => {
                return todo.id !== action.payload.id
            })
        case 'checked':
            const others = state.filter(todo => {
                return todo.id !== action.payload.id;
            });
            const checkedone = state.filter(todo => {
                return todo.id === action.payload.id
            })[0];
            checkedone.completed = true;
            return others.concat(checkedone); 
        case 'unchecked':
            const uncheckedone = state.filter(todo => {
                return todo.id === action.payload.id
            })[0];
            uncheckedone.completed = false;
            const otherchecked = state.filter(todo => {
                return todo.id !== action.payload.id;
            })
            return otherchecked.concat(uncheckedone);
        default:
            return state;
    }
}
export default todos;