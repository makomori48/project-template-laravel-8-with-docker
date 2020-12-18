import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Navbar from "./Navbar";
import Form from "./Form";
import TodoItem from "./TodoItem";

function Example() {
	const [password, setPassword] = useState("");
	const [position, setPosition] = useState("FullStack");
	const [gender, setGender] = useState("Male");
	const [email, setEmail] = useState("");
	const [birth, setBirth] = useState(new Date());
	const [imgData, setImgData] = useState(null);
	const [pic, setPic] = useState(null);
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState([]);

	const [status, setStatus] = useState("all");
	const [filter, setFilter] = useState([]);

	const filterFn = () => {
		switch (status) {
			case "st":
				setFilter(todos.filter(todo => todo.complete === true));
				break;

			case "aca":
				setFilter(todos.filter(todo => todo.complete === false));
				break;

			default:
				setFilter(todos);
				break;
		}
	};

	useEffect(() => {
		filterFn();
		getLocal();
	}, []);

	useEffect(() => {
		filterFn();
		saveLocal();
	}, [todos, status]);

	const saveLocal = () => {
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	const getLocal = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let todosLocal = JSON.parse(localStorage.getItem("todos"));
			setTodos(todosLocal);
		}
	};

	return (
		<div className="app">
			<div className="left__bar">
				<Navbar />
			</div>

			<div className="input__form">
				<Form
					todos={todos}
					setTodos={setTodos}
					input={input}
					setInput={setInput}
					pic={pic}
					setPic={setPic}
					setImgData={setImgData}
					setBirth={setBirth}
					birth={birth}
					setEmail={setEmail}
					email={email}
					setGender={setGender}
					gender={gender}
					setPosition={setPosition}
					position={position}
					setPassword={setPassword}
					password={password}
				/>
			</div>

			<div className="view">
				<TodoItem
					filter={filter}
					setStatus={setStatus}
					setTodos={setTodos}
					todos={todos}
				/>
			</div>
		

		</div>
	);
}

function renderToDOM () {
	if (document.getElementById('mainDiv')) {
		ReactDOM.render(<Example />, document.getElementById('mainDiv'))
	}
}
renderToDOM()

export { renderToDOM }

export default Example
