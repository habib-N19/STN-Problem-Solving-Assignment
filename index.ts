/**
 *1- Task: Array Filtering And Mapping
Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.
 */

type TPerson = {
	name: string;
	age: number;
	gender: "male" | "female";
};
const people: TPerson[] = [
	{ name: "John", age: 25, gender: "male" },
	{ name: "Jane", age: 22, gender: "female" },
	{ name: "Jack", age: 30, gender: "male" },
	{ name: "Jill", age: 28, gender: "female" },
];
const filterPersonMapName = (people: TPerson[]): string[] => {
	const filterByMale = people.filter((person) => person.gender != "female");
	const personNames = filterByMale.map((person) => person.name);
	return personNames;
};
console.log(filterPersonMapName(people));
