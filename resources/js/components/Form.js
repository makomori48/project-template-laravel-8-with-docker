import React from "react";

import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	root: {
		"& > *": {
			margin: theme.spacing(1)
		}
	},
	form__container: {
		height: "100vh",
		color: "white",
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},

	h1: {
		marginTop: "25px"
	},

	form__input: {
		marginTop: "50px",
		height: "600px",
		width: "480px",
		borderRadius: "6px",
		fontSize: "18px"
	},
	input: {
		display: "none"
	},
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		// backgroundColor: '#DAD5DB',
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200
	}
}));

function Form({
	setInput,
	input,
	setBirth,
	birth,
	setEmail,
	email,
	setGender,
	gender,
	setTodos,
	todos,
	pic,
	setPic,
	setImgData,
	setPosition,
	position,
	password,
	setPassword
}) {
	const picHendler = e => {
		if (e.target.files[0]) {
			console.log("picture: ", e.target.files);
			setImgData(e.target.files[0]);
			const reader = new FileReader();
			reader.addEventListener("load", () => {
				setPic(reader.result);
			});
			reader.readAsDataURL(e.target.files[0]);
		}
	};

	const birthHendler = e => {
		setBirth(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		setTodos([
			...todos,
			{
				text: input,
				complete: false,
				id: Math.random() * 1000,
				pic: pic,
				birth: birth,
				email: email,
				gender: gender,
				position: position,
				password: password
			}
		]);
		setInput("");
		setPic("");
		setBirth("");
		setEmail("");
		setPassword("");
	};

	const classes = useStyles();

	return (
		<div className={classes.form__container}>
			<h1 className={classes.h1}>ADD TRAINEE</h1>
			<FormControl className={classes.form__input}>
				<div className={classes.root}>
					<p>Profile Pic.</p>
					<input
						accept="image/*"
						className={classes.input}
						id="contained-button-file"
						multiple
						type="file"
						onChange={picHendler}
					/>
					<label htmlFor="contained-button-file">
						<Button
							onChange={picHendler}
							variant="contained"
							color="primary"
							component="span"
						>
							Upload
						</Button>
					</label>

					<label htmlFor="icon-button-file">
						<IconButton color="primary" aria-label="upload picture" component="span">
							<PhotoCamera />
						</IconButton>
					</label>
				</div>

				<TextField
					className={classes.textField}
					id="standard-basic"
					label="Name"
					placeholder="firstname-lastname"
					value={input}
					onChange={e => setInput(e.target.value)}
					type="text"
				/>

				<br />

				<div className={classes.container} noValidate>
					<TextField
						value={birth}
						onChange={birthHendler}
						id="date"
						label="Birthday"
						type="date"
						defaultValue="2017-05-24"
						className={classes.container}
						InputLabelProps={{
							shrink: true
						}}
					/>
				</div>

				<TextField
					label="Email"
					className={classes.textField}
					value={email}
					onChange={e => setEmail(e.target.value)}
					type="email"
				/>
				<br />
				<div className="form__gender">
					<label>Gender : </label>

					<input
						type="radio"
						checked={gender === "Male"}
						value="Male"
						onChange={e => setGender(e.target.value)}
					/>
					<label>Male </label>
					<input
						type="radio"
						checked={gender === "Female"}
						value="Female"
						onChange={e => setGender(e.target.value)}
					/>
					<label>Female </label>
				</div>

				<FormControl className="posi">
					<label>Position</label>

					<Select
						id="demo-posi"
						value={position}
						onChange={e => setPosition(e.target.value)}
					>
						<MenuItem value="Frontend-Developer">Frontend-Developer</MenuItem>
						<MenuItem value="Backend-Developer">Backend-Developer</MenuItem>
						<MenuItem value="Mobile-Developer">Mobile-Developer</MenuItem>
					</Select>
				</FormControl>

				<br />
				<label>Set password for delete : </label>
				<textField
					label="Password"
					type="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>

				<div className="btn__group">
					<div className="btn__submit">
						<Button variant="contained" color="primary" onClick={onSubmit}>
							Submit
						</Button>
					</div>

					<div className="btn__clear">
						<Button
							variant="contained"
							color="secondary"
							onClick={() => window.location.reload(true)}
						>
							Clear
						</Button>
					</div>
				</div>
			</FormControl>
		</div>
	);
}

export default Form;
