import React, { useState, useEffect, useContext } from "react";
import "./index.css";
import { TodoContext } from "./context/TodoProvider";
import { Container, Row, Col } from "react-bootstrap";
import TodoList from "./components/TodoList";
import ItemForm from "./components/ItemForm";
import { Divider } from "antd";

function App() {
	const { todos, getAllTodos } = useContext(TodoContext);

	useEffect(() => {
		getAllTodos("https://hfcf8t.sse.codesandbox.io/todo");
	}, []);

	return (
		<div className='App'>
			<ItemForm />
			<Divider>My Todo Lists</Divider>
			<Container>
				<Row className='mt-5'>
					<Col sm={12} lg={6}>
						<TodoList
							data={
								!todos.loading
									? todos.todos.filter(
											todo => todo.completed === false
									  )
									: []
							}
						/>
					</Col>
					<Col sm={12} lg={6}>
						<TodoList
							completed
							data={
								!todos.loading
									? todos.todos.filter(todo => todo.completed === true)
									: []
							}
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
