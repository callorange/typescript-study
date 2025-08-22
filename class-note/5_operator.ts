// 기본 타입 union
function logMessage(value: any) {
  console.log(value);
}

logMessage("Hello");
logMessage(100);
logMessage(false);

function logMsg(value: string | number) {
  if (typeof value === "number") {
    console.log(value.toLocaleString);
  }
  if (typeof value === "string") {
    console.log(value.toString());
  }
  throw new TypeError("value must be string or number");
}
logMsg("Hello");
logMsg(100);

// 인터페이스의 유니온, 인터섹션 타입

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeone1(someone: Developer | Person) {
  someone.name;
  // someone.age;  // error!
  // someone.skill;  // error!
}

// askSomeone1({ name: "2222"});  // error!
askSomeone1({ name: "name", skill: "skill" });
askSomeone1({ name: "2222", age: 111 });

function askSomeone2(someone: Developer & Person) {
  someone.name;
  someone.age;
  someone.skill;
}

// askSomeone2({ name: "2222" }); // error!
// askSomeone2({ name: "name", skill: "skill" }); // error!
// askSomeone2({ name: "2222", age: 111 }); // error!
askSomeone2({ name: "2222", skill: "12", age: 111 });
