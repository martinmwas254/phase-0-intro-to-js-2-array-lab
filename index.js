const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
  cats.push("Ralph");
}

function destructivelyPrependCat() {
  cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat() {
  let newCatsArray = [...cats, "Broom"];
  return newCatsArray;
}

let newCatsArray = appendCat();

function prependCat() {
  let newCatsArray = ["Arnold", ...cats];
  return newCatsArray;
}

let newCatsArray2 = prependCat();

function removeLastCat() {
  let copyOfCats = cats.slice(0, 2);
  return copyOfCats;
}
let copyOfCats2 = removeLastCat();

function removeFirstCat() {
  let copy1OfCats = cats.slice(1);
  return copy1OfCats;
}
let copy2OfCats = removeFirstCat();

console.log(copy2OfCats)
