function get_the_two_largest_number_together(a,b,c){
	var my_array = [a,b,c];
	my_array = my_array.sort(sortNumber);
	console.log(my_array);
	return (my_array[1]+my_array[2]);
}
function sortNumber(a,b){
	return a-b;
}

function two_number_together(a,b){
	return a+b;
}
function factorial(n){
	if(n==1){
		return  1;
	}
	return factorial(n-1)*n;
}