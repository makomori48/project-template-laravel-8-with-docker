import React from "react";
import Todo from "./Todo";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

function TodoItem({ todos, setTodos, setStatus, filter }) {
	const classes = useStyles();

	return (
		<div className="todoitem">
			<h1>PROFILE</h1>
			<FormControl className={classes.formControl}>
				{/* <InputLabel id="demo-simple-select-label">Filter</InputLabel> */}
				<select
					// labelId="demo-simple-select-label"
					onChange={e => setStatus(e.target.value)}
					className="jett"
					defaultValue='all'
					data-testid='dropdown'
				>
					<option data-testid='op'  value="all">SHOW All</option>
					<option data-testid='op' value="st">EMPLOYEE</option>
					<option data-testid='op' value="aca">TRAINEE</option>
				</select>
			</FormControl>

			<ul className='dataMap' >
				{filter.map(todo => (
					<Todo
						todo={todo}
						todos={todos}
						setTodos={setTodos}
						Key={todo.id}
						text={todo.text}
						pic={todo.pic}
						birth={todo.birth}
						email={todo.email}
						gender={todo.gender}
						position={todo.position}
						password={todo.password}
						complete={todo.complete}
					/>
				))}
			</ul>
		</div>
	);
}

export default TodoItem;
