var rect = {
    perimeter: (x,y)=> (2*(x+y)), 
    area: (x,y)=>(x*y)
};
function solveRect(l,b) {
    console.log('solving rectangle l=' + l + ' and b=' + b);
    if(l <=0 || b<=0){
        console.log("rectangle dimesion should be greater than zero");
    }else{
        console.log('the area of rectangle is ' + rect.area(l,b));
        console.log('The perimeter of rectangle is ' + rect.perimeter(l,b));
    }
};
solveRect(2, 4);
solveRect(4, 3);