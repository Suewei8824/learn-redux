function filterReducer(state = 'all', action) {
    switch (action.type) {
        case 'filterModify':
            return action.filter
        default:
            return state
    }
}
export default filterReducer;