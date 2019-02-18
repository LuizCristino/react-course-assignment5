import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import withStyles from "react-jss";
import AddPerson from "./components/AddPerson";
import Persons from "./containers/Persons";

const styles = {
	container: {
		textAlign: "center",
		margin: 8,
		padding: 8
	},
	btnContainer: { marginBottom: 16 },
	personContainer: {
		display: "flex",
		flexFlow: "row wrap",
		padding: 5,
		"& > div": {
			margin: 5,
			flex: "1 1 auto"
		}
	}
};

const app = ({ classes }) => {
	return (
		<Provider store={store}>
			<div className={classes.container}>
				<div className={classes.btnContainer}>
					<AddPerson />
				</div>
				<div className={classes.personContainer}>
					<Persons />
				</div>
			</div>
		</Provider>
	);
};
export default withStyles(styles)(app);
