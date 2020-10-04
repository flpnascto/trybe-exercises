let angA, angB, angC;

angA = "teste";
angB = 90;
angC = 90;

if ((typeof angA === "number") &&
    (typeof angB === "number") &&
    (typeof angC === "number")) {
    
  let sum = ((angA + angB + angC) === 180) ? console.log("true") : console.log("false");
} else {
  console.log("Valores informados não são válidos!")
}