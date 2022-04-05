var list1 = [];
var list2 = [];
var list3 = [];

var a;
var b;
var c;

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




function setup() {
    list1 = [];
    list2 = [];
    list3 = [];

    for (var d = 0; d < 1; d++) {
        list1.push(getRandom(1, 10))
    }

    for (var f = 0; f < 3; f++) {
        list3.push(0);
    }
    
    for (var g = 0; g < (list1.length*list3.length); g++) {
        list2.push(getRandom(-10, 10))
    }
}

function ai() {
    a = 0;
    c = 0;
    for (var i = 0; i < list3.length; i++) {
        a++;
        b = 0;
        for (var j = 0; j < list1.length; j++) {
            b++;
            c++;
            list3[a] = list3[a] + list1[b] * list2[c]
        }
    }
}


setup();
ai();


console.log("List1: ", list1, "\nList2: ", list2, "\nList3 :", list3);
console.log("\n\n\nVariable a: ", "\nVariable b: ", b, "\nVariable c: ", c);