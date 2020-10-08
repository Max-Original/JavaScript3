function rozdilutu(){
	console.log("===============");
}

function show(array){
	console.log(array);
}

let products = [1,2,3,4,5,6,7,8];
console.log(products.length-1);
console.log(products[7]);
rozdilutu();

let styles = ["Джаз","Блюз"];
styles.push("Рок-н-Ролл");
styles.splice(-1,1,"Класика");
styles.shift();
styles.unshift("Реп","Реггі");
show(styles);
rozdilutu();

function find(arr,value){
	for (var i = 0; i < arr.length-1; i++) {
		let array_element = arr[i];
		if (array_element == value) {
			console.log(i);
		} else{
			console.log(-1);
		}
	}
}

let numbers = [1,2,3,4,5,6,7,8,9];
find(numbers,4);
rozdilutu();

function filterRange(arr,a,b){
	let newArray = arr.slice(a,b);
	console.log(newArray);
}
filterRange(numbers, 2, 6);
rozdilutu();

