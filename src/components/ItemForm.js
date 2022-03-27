import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";

import {TodoContext} from "../context/TodoProvider";
import { Form, Input, Button, Checkbox, DatePicker } from "antd";
const ItemForm = () => {
	const { addTodoItem } = useContext(TodoContext);

	const onFinish = values => {
		const item = values.item;
		const deadline = values.deadline;

		console.log(deadline, item);
		const newTodo = { item, deadline };
		addTodoItem(
			newTodo,
			"https://hfcf8t.sse.codesandbox.io/todo/new",
			"https://hfcf8t.sse.codesandbox.io/todo"
		);
	};

	const onFinishFailed = errorInfo => {
		console.log("Failed:", errorInfo);
	};
	return (
		<Container className='mb-5 mt-3'>
			<Row>
				<Form
					name='basic'
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete='off'
				>
					<Form.Item
						label='Todo'
						name='item'
						rules={[
							{ required: true, message: "Please input your task!" },
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label='Deadline'
						name='deadline'
						rules={[
							{
								required: true,
								message:
									"Please select when you must finish your task!",
							},
						]}
					>
						<DatePicker />
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
						<Button type='primary' htmlType='submit'>
							Add Item
						</Button>
					</Form.Item>
				</Form>
			</Row>
		</Container>
	);
};

export default ItemForm;
