// Створити клас Employee, у якому будуть такі характеристики - name (ім'я), age (вік), salary (зарплата).
// Зробіть так, щоб ці характеристики заповнювалися під час створення об'єкта.
// Створіть гетери та сеттери для цих властивостей.
// Створіть клас Programmer, який успадковуватиметься від класу Employee, і який матиме властивість lang (список мов).
// Для класу Programmer перезапишіть гетер для властивості salary. Нехай він повертає властивість salary, помножену на 3.
// Створіть кілька екземплярів об'єкта Programmer, виведіть їх у консоль.

class Employee {
  constructor(name, age, salary) {
    this._name = name;
    this._age = age;
    this._salary = salary;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    this._age = age;
  }

  get salary() {
    return this._salary;
  }

  set salary(salary) {
    this._salary = salary;
  }
}

class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this.lang = lang;
  }

  get salary() {
    return this._salary * 3;
  }

  get lang() {
    return this._lang;
  }

  set lang(lang) {
    this._lang = lang;
  }

}

const alex = new Programmer("Alex", 36, 2000, ["C++", "C#", "Java"])
const john = new Programmer("John", 22, 1000, ["JS", "Java", "Python"])
console.log(alex)
console.log(john)

console.log(alex.salary)
console.log(john.salary)