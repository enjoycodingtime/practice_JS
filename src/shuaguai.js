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

function count_change(amount){  
  
    return cc(amount, 5);  
}  
function cc(amount, kind_of_coins) {  
    if(amount == 0){  
        return 1;  
    }else if(amount < 0||kind_of_coins == 0){  
        return 0  
    }else{  
        return cc(amount, kind_of_coins - 1) + cc(amount-first_denomination(kind_of_coins), kind_of_coins)  
    }  
}  
function first_denomination(kind_of_coins){  
    if(kind_of_coins == 1){  
        return 1;  
    }else if(kind_of_coins == 2){  
        return 5;  
    }else if(kind_of_coins == 3){  
        return 10;  
    }else if(kind_of_coins == 4){  
        return 25;  
    }else if(kind_of_coins == 5){  
        return 50;  
    }  
}  