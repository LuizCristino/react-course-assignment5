import React from "react";
import withStyles from "react-jss";

const styles = {
	person: {
		border: "1px solid rgba(0,0,0, 0.25)",
		borderRadius: "0.25em",
		boxShadow: "2px 2px 2px #ccc",
		padding: [8, 24],
		userSelect: "none",
		"& h1": {
			padding: 0,
			margin: 0
		},
		"& p": {
			padding: 0,
			margin: 0
		},
		"& .close": {
			"&::after": {
				display: "inline-block",
				content: "'\\00d7'", // HTML entity same as &times;
				color: "gray",
				float: "right",
				cursor: "pointer",
				fontSize: 24,
				fontWeight: "bold"
			},
			"&:hover": {
				"&::after": {
					color: "red"
				}
			}
		}
	}
};

const person = ({ classes, person, onClick }) => {
	return (
		<div className={classes.person}>
			<div className="close" onClick={() => onClick(person.id)} />
			<h1>{person.name}</h1>
			<p>Age: {person.age}</p>
		</div>
	);
};

export default withStyles(styles)(person);
