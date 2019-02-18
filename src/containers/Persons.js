import React from "react";
import { connect } from "react-redux";
import Person from "../components/Person";
import { DEL_PERSON } from "../store/actions";

const persons = props => {
	return props.persons.list.map(x => (
		<Person key={x.id} person={x} onClick={props.onDelPerson} />
	));
};

const mapStateToProps = state => ({ persons: state.persons });
const mapDispatchToProps = dispatch => ({
	onDelPerson: id => dispatch({ type: DEL_PERSON, id })
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(persons);
