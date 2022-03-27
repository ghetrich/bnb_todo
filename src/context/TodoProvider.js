import React, { useReducer, createContext } from "react";
import TodoReducer from "./TodoReducer";
import axios from "axios";
export const TodoContext = createContext();

const initialState = {
	loading: true,
	todos: [],
};

const TodoProvider = props => {
	const [todos, dispatch] = useReducer(TodoReducer, initialState);

	const getAllTodos = URI => {
		axios
			.get(URI)
			.then(response => {
				dispatch({ type: "GET", payload: response.data.payload });
			})
			.catch(error => {
				console.log(error);
			});
	};

	const addTodoItem = ({ item, deadline }, URI, getUri) => {
		axios
			.post(URI, { item, deadline })
			.then(response => {
				getAllTodos(getUri);

				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const setStatus = (URI, item, getUri) => {
		axios
			.put(URI + item)
			.then(response => {
				getAllTodos(getUri);

				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const deleteItem = (URI, items, getUri) => {
		console.log(items);
		axios
			.post(URI, items)
			.then(response => {
				getAllTodos(getUri);

				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<TodoContext.Provider
			value={{ todos, getAllTodos, addTodoItem, setStatus, deleteItem }}
		>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodoProvider;
