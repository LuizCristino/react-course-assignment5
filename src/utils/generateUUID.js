import uuidv5 from "uuid/v5";

const NAMESPACE = "6ba7b812-9dad-11d1-80b4-00c04fd430c8"; // Pre-defined UUID_RFC

const generateUUID = string => {
	return uuidv5(string + new Date() + Math.random(), NAMESPACE);
};

export default generateUUID;
