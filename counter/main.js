//Closure is a mechanism that helps us access a value outside a function and when that function is no longer active
//Closure - a variable exists in another function, even though the function in which the variable was created is no longer active
//In program memory, a variable exists if a reference from another function leads to it. We can access it, but also change them

const add = (start = 0) => {
  let number = start;
  return () => {
    number++;
    document.body.textContent = `The current counter status is: ${number}`;
  };
};

const user = (name = "", age) => {
  let userName = name;
  let userAge = age;

  function showName() {
    alert(
      `Hello ${userName}, ${
        userAge >= 18 ? "You have access" : "You don't have access"
      }`
    );
  }
  return showName;
};

const adam = user("Adam", 20);

const counter = add();

document.addEventListener("click", counter);
adam();
