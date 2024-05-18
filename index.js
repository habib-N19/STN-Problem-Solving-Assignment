/**
 *1- Task: Array Filtering And Mapping
Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.
 */
var people = [
    { name: "John", age: 25, gender: "male" },
    { name: "Jane", age: 22, gender: "female" },
    { name: "Jack", age: 30, gender: "male" },
    { name: "Jill", age: 28, gender: "female" },
];
var filterPersonMapName = function (people) {
    var filterByMale = people.filter(function (person) { return person.gender != "female"; });
    var personNames = filterByMale.map(function (person) { return person.name; });
    return personNames;
};
console.log(filterPersonMapName(people));
var books = [
    { title: "Book1", author: "Author1", year: 2021 },
    { title: "Book2", author: "Author2", year: 2022 },
    { title: "Book3", author: "Author3", year: 2023 },
    { title: "Book4", author: "Author4", year: 2024 },
];
var getBookTitles = function (books) {
    var bookTitles = books.map(function (book) { return book.title; });
    return bookTitles;
};
console.log(getBookTitles(books));
/**
 *3- Task: Function Composition
Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.
    */
var squareNum = function (num) { return num * num; };
var doubleNum = function (num) { return num * 2; };
var addFive = function (num) { return num + 5; };
var composeFunction = function (num) {
    return addFive(doubleNum(squareNum(num)));
};
console.log(composeFunction(2));
var cars = [
    { make: "Toyota", model: "Corolla", year: 2019 },
    { make: "Honda", model: "Civic", year: 2018 },
    { make: "BMW", model: "X5", year: 2020 },
    { make: "Audi", model: "A4", year: 2017 },
];
var sortCarsByYear = function (cars) {
    var sortedCars = cars.sort(function (a, b) { return a.year - b.year; });
    return sortedCars;
};
console.log(sortCarsByYear(cars));
