function rename_keys(schema) {}

const obj = { name: "Bobo", job: "Programmer", shoeSize: 100 };
result = rename_keys({ name: "firstName", job: "Actor" }, obj);

console.log(result);

// [object Object] {
//   Actor: "Programmer",
//   firstName: "Bobo",
//   shoeSize: 100
// }
