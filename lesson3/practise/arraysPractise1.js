function show(array){
	console.log(array);
}

function rozdilutu(){
	console.log("===============")
}

let array = [];
show(array);

array = ["BMW","AUDI","HONDA"];


show(array[0]);
show(array[1]);
show(array[2]);

rozdilutu();

array[1] = "audi rs3";
show(array);

let variousDataArray = ["true", "TestData",{name : "John"}];

show(variousDataArray);

rozdilutu();

//Methods
//1.pop(), removes the lest element in the array

show('POP()');
show(array);
show(array.pop());
show(array);
rozdilutu();

//2.push(), add a element to the end of the array
show('PUSH()');
show(array);
array.push('Watermelon');
show(array);
rozdilutu();

//3.shift(), removes first element from the array
show('SHIFT()');
show(array);
show(array.shift());
show(array);
rozdilutu();

//4.unshift(),
show('UNSHIFT()');
show(array);
array.unshift('Bluberry');
show(array);
rozdilutu();

//5.add multiple elements
show(array);
array.push('Apple', 'Orange', 'Cherry');
show(array);
array.unshift('Apple', 'Orange');
show(array);
rozdilutu();

//6.set values with wholes
array[12]="Hello ther, from 12 position";
show(array);
rozdilutu();

//7. create array with constructor
let customArray = new Array("car-1","car-2","car-3");
show(customArray);
rozdilutu();

customArray = new Array(2);
show(customArray);
show(customArray.length);
rozdilutu();

