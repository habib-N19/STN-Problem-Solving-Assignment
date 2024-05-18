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

/**
 *2- Task: Object Manipulation
Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.
 */
type TBook = {
	title: string;
	author: string;
	year: number;
};
const books: TBook[] = [
	{ title: "Book1", author: "Author1", year: 2021 },
	{ title: "Book2", author: "Author2", year: 2022 },
	{ title: "Book3", author: "Author3", year: 2023 },
	{ title: "Book4", author: "Author4", year: 2024 },
];
const getBookTitles = (books: TBook[]): string[] => {
	const bookTitles = books.map((book) => book.title);
	return bookTitles;
};
console.log(getBookTitles(books));

/**
 *3- Task: Function Composition
Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.
    */
const squareNum = (num: number): number => num * num;
const doubleNum = (num: number): number => num * 2;
const addFive = (num: number): number => num + 5;
const composeFunction = (num: number): number =>
	addFive(doubleNum(squareNum(num)));
console.log(composeFunction(2));

/**
 *4- Task: Sorting Objects
Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.
    */
type TCar = {
	make: string;
	model: string;
	year: number;
};
const cars: TCar[] = [
	{ make: "Toyota", model: "Corolla", year: 2019 },
	{ make: "Honda", model: "Civic", year: 2018 },
	{ make: "BMW", model: "X5", year: 2020 },
	{ make: "Audi", model: "A4", year: 2017 },
];
const sortCarsByYear = (cars: TCar[]): TCar[] => {
	const sortedCars = cars.sort((a, b) => a.year - b.year);
	return sortedCars;
};
console.log(sortCarsByYear(cars));
