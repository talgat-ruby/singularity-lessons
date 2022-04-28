function renameKeys(schema, target) {
	// for (const [oldKey, newKey] of Object.entries(schema)) {
	// 	target[newKey] = target[oldKey];
	// 	delete target[oldKey];
	// }
	// return target;

	const newTarget = {};
	for (const key of Object.keys(target)) {
		if (schema[key]) {
			newTarget[schema[key]] = target[key];
		} else {
			newTarget[key] = target[key];
		}
	}
	return newTarget;
}

const obj = { name: "Bobo", job: "Programmer", shoeSize: 100 };
result = renameKeys({ name: "firstName", job: "Actor" }, obj);

console.log(result);
// [object Object] {
//   Actor: "Programmer",
//   firstName: "Bobo",
//   shoeSize: 100
// }
