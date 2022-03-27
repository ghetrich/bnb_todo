const TodoReducer = (state, action) => {
	switch (action.type) {
		case "GET":
			return { loading: false, todos: action.payload };
        
		default:
			return state;
	}
};


export default TodoReducer;