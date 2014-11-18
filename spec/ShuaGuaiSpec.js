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
  
});

