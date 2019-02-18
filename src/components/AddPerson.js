import React from "react";
import { connect } from "react-redux";
import withStyles from "react-jss";
import { ADD_PERSON } from "../store/actions";

const styles = {
	button: {
		padding: [4, 8],
		borderRadius: "0.25em",
		borderStyle: "solid",
		borderWidth: [1, 1, 4, 1],
		transition:
			"color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color:  0.15s ease-in-out",
		"&:hover": {
			borderBottomWidth: 3,
			marginTop: 1
		}
	},
	success: {
		backgroundColor: "hsl(120, 52%, 50%)",
		borderColor: "hsl(120,52%,35%)",
		color: "#FFF",
		"&:hover": {
			backgroundColor: "hsl(120, 52%, 65%)",
			borderColor: "hsl(120,52%,45%)"
		}
	}
};

const addPerson = ({ classes, onAddPerson }) => {
	return (
		<button
			className={[classes.button, classes.success].join(" ")}
			onClick={onAddPerson}
		>
			Add Person
		</button>
	);
};

const mapDispatchToProps = dispatch => ({
	onAddPerson: () => dispatch({ type: ADD_PERSON })
});

export default connect(
	null,
	mapDispatchToProps
)(withStyles(styles)(addPerson));
