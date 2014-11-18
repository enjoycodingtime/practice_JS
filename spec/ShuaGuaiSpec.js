describe("ShuaGuai", function() {  
  it("一个函数，有三个参数，返回其中两个最大的数的和", function() {
    expect(get_the_two_largest_number_together(12,11,55)).toEqual(67);
  });
  it('设计一个函数，有两个参数a,b，计算a+  b',function(){
    expect(two_number_together(1,2)).toEqual(3);
  });
  it('一个函数，接受一个参数n，计算n的阶乘',function(){
    expect(factorial(4)).toEqual(24);
  });
  it('一个函数，接受一个参数n，实现菲波那契数列，1，2，3，5，8…',function(){
     expect(fibonacci_number_column(5)).toEqual(8);
  });
});
describe('一个函数A，接受两个参数x,y，如果y为零，返回0， 如果x为零返回2y，如果y=1则返回2。否则调用y-1做为新的y执行本流程得到的返回值作为另一个新的y，x-1再次执行本流程，A(x-1, A(x, y-1)) ',function(){
  it('if y=0 return 0',function(){
  	expect(A(1,0)).toEqual(0);
  });
  it('if x=0 return 2Y',function(){
  	expect(A(0,1)).toEqual(2);
  });
  it('if y=1 return 2',function(){
  	expect(A(1,1)).toEqual(2);
  });
});
describe('找零钱',function(){
   it('if n =1',function(){
   	expect(count_change(1)).toEqual(1);
   });
   it('if n = 5',function(){
   	expect(count_change(5)).toEqual(2);
   });
   it('if n = 11',function(){
   	expect(count_change(11)).toEqual(4);
   });
});
describe('函数f有如下规定： 如果n<3, 那么f(n)=n,如果n>=3那么f(n) = f(n-1)+2f(n-2)+2f(n-3).实现这个函数，用迭代和递归各实现一遍',function(){
	it('递归:if n == 5 return 22',function(){
		expect(f(5)).toEqual(22);
	});
	it('迭代:if n == 5 return 22',function(){
		expect(f1(5)).toEqual(22);
	});
})

