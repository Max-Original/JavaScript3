function show(array){
	console.log(array);
}

function rozdilutu(){
	console.log("===============")
}

let array = [];
show(array);

//1.splite(), cuts string in to a single word
show('SPLITE()');
let fruitString = 'Apple, Orange, Cherry';
array = fruitString.split(',');
show(array);
rozdilutu();

//2.join(), add anything you want betwean you words
show('JOIN()');
//let fruitString = '';
fruitString = array.join('--->>>');
show(fruitString);
rozdilutu();

//3.delete from array, just ut in a key of the value that you want to delete
show('delete KEYWORD)');
show(array);
delete array[2];
show(array);
rozdilutu();

//4. splice
show('SPLICE()');
array.push('Apple',' Orange','Cherry','Apple',' Orange','Cherry');
show(array);
rozdilutu();
//delete one element starting from the second element
array.splice(2,1);
show(array);
rozdilutu();
//after the 3 element add 3 elements
array.splice(3,3,'KIVI','KIVI','KIVI');
show(array);
rozdilutu();
//starting from the second last, delete nothing, add two elements
array.splice(-1,0,100,100);
show(array);
rozdilutu();

//5.slice()
show('SLICE()');

//cuts the array starting from 2 element to 4 element
show(array.slice(2,5));

//cuts array from the 7 element till the end
show(array.slice(7));

//copies the hole array
show(array.slice());