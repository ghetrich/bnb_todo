import React, { useContext } from "react";
import { Card, List, Checkbox, Button, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import moment from "moment";
import { TodoContext } from "../context/TodoProvider";

const TodoList = props => {
	const { setStatus, deleteItem } = useContext(TodoContext);
	const statusChanged = (e, item) => {
		setTimeout(() => {
			setStatus(
				"https://hfcf8t.sse.codesandbox.io/todo/completed/",
				item,
				"https://hfcf8t.sse.codesandbox.io/todo"
			);
		}, 1000);
		
	};

	const removeItem = item => {
		let items = {
			items: [],
		};

		items.items.push(item);

		deleteItem(
			"https://hfcf8t.sse.codesandbox.io/todo/remove",
			items,
			"https://hfcf8t.sse.codesandbox.io/todo"
		);
	};

	return (
		<Card title='Pending Tasks'>
			<div
				id='scrollableDiv'
				style={{
					height: 400,
					overflow: "auto",
					padding: "0 16px",
					border: "1px solid rgba(140, 140, 140, 0.35)",
				}}
			>
				<List
					dataSource={props.data}
					renderItem={item => (
						<List.Item key={item._id}>
							<List.Item.Meta
								avatar={
									<Checkbox
										onChange={e => statusChanged(e, item._id)}
									></Checkbox>
								}
								title={
									<Tooltip
										title='prompt text'
										color='108ee9'
										key={item._id}
									>
										<a href='#'>{item.item}</a>
									</Tooltip>
								}
								description={moment(item.createdAt).calendar()}
							/>
							<div>
								<Button
									onClick={() => removeItem(item._id)}
									shape='circle'
									icon={
										<DeleteOutlined style={{ color: "#eb2f96" }} />
									}
									size='small'
								/>
							</div>
						</List.Item>
					)}
				/>
			</div>
		</Card>
	);
};

export default TodoList;
