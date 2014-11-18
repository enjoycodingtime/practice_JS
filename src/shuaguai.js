function get_the_two_largest_number_together(a,b,c){
	var my_array = [a,b,c];
	my_array = my_array.sort(sortNumber);
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
};

function fibonacci_number_column(n){
	if(n == 1){
		return 1;
	};
	if(n == 2){
		return 2;
	}
	return fibonacci_number_column(n-2)+fibonacci_number_column(n-1);
};

function A(x,y){
	if(y == 0){
		return 0;
	};
	if(x == 0){
		return 2*y;
	};
	if(y == 1){
		return 2;
	};
	return A(x-1,A(x,y-1));
};

function f(n){
	if(n < 3){
		return n;
	};
	return f(n-1)+2*f(n-2)+2*f(n-3);// f(n-1)+2f(n-2)+2f(n-3)
};
function f1(n){
	var result=[];
	var i;
	for (i = 0;i<=n;i++){
		if(i<3){
			result[i] = i;
		}else{
		result[i] = result[i-1]+2*result[i-2]+2*result[i-3];
		}
	}
	return result[n];
}
