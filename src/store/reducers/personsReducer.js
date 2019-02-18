import { Chance } from "chance";
import _ from "lodash";
import * as actions from "../actions";
import gen from "../../utils/generateUUID";

const chance = new Chance();

const initialState = {
	list: [{ id: gen("Luiz28"), name: "Luiz", age: 28 }]
};

const personsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.ADD_PERSON:
			const name = chance.name();
			const age = chance.age();
			const newPerson = { id: gen(name + age), name, age };
			const newList = _.cloneDeep(state.list).concat(newPerson);
			return { list: newList };
		case actions.DEL_PERSON:
			return {
				list: _.cloneDeep(state.list).filter(x => x.id !== action.id)
			};
		default:
			return state;
	}
};

export default personsReducer;
