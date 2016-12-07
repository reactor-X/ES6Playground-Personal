class Demo {
  constructor(){
    console.log('created');
  }
  promise(){
    return new Promise(function(resolve,reject){ resolve('hii')});
  }
  core(){
    return this.promise().then(
      function(str){
        console.log( str + ' there');
      });
  }
  x=24;
}
var dem=new Demo();
dem.core();
console.log(dem.x);
