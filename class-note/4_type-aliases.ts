interface Person {
  name: string;
  age: number;
}

var person: Person = {
  name: "세호",
  age: 30,
};

// ---

type Human = {
  name: string;
  age: number;
};

var seho: Human = {
  name: "세호",
  age: 30,
};

// ---

type MyString = string;
var str: MyString = "hello";

// ---

type Todo = {
  id: string;
  title: string;
  done: boolean;
};
function getTodo(todo: Todo) {}
