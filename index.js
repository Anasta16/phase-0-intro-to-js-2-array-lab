const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
   cats.unshift("Bob"); 
}

function destructivelyRemoveLastCat() {
    cats.pop("Ralph");
}

function destructivelyRemoveFirstCat() {
    cats.shift("Bob");
}

function appendCat() {
    const cats2 = [...cats, "Broom"];
    return cats2;
}

function prependCat() {
    const cats3 = ["Arnold", ...cats];
    return cats3;
}

function removeLastCat() {
    return cats.slice(0, 2);
}

function removeFirstCat() {
    return cats.slice(1);
}