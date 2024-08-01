//table of content
//deepClone
//1.map polyfill
//2.filter polyfill
//3.reduce polyfill
//4.call polyfill
//5.apply polyfill
//6.bind polyfill

//------------------------------deepClone--------------------------------1
const deepClone = (obj) => {
  const type = typeof obj;
  if (type !== "object" || obj == null) return obj;
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }
  let arrObj = Object.entries(obj);
  let deepCloneArrObj = arrObj.map(([key, value]) => [key, deepClone(value)]);
  return Object.fromEntries(deepCloneArrObj);
};
//......................easy deep clone..........................
JSON.parse(JSON.stringify(obj));


//----------------------------map polyfill------------------1
Array.prototype.map = function (callBackFn) {
    const result = [];
  //   this[i]
    for (let index = 0; index < this.length; index++) {
      result.push(callBackFn(this[index], index));
    }
    return result;
  };
  

  //----------------------filter polyfill-------------2
  Array.prototype.filter = function (callbackFn) {
    const result = [];
  
    for (let i = 0; i < this.length; i++) {
      if (callbackFn(this[i], i, this)) {
        result.push(this[i]);
      }
    }
  
    return result;
  };
  

  //-----------------reduce polyfill-------------------3
  Array.prototype.reduce = function (callback, initialValue) {
    let accumulator = initialValue; 
    for (let i = 0; i < this.length; i++) {
      if (accumulator === undefined) {
          accumulator = this[i];
      }
      else{
          accumulator = callback(accumulator, this[i], i, this);
      }
    }
    return accumulator;
  };
  

  //---------------call polyfill---------------------4
  Function.prototype.call = function (objectContext, ...restOfTheArgs) {
    // the THIS keyword will be having defi of fn
    objectContext.tempFn = this;
    //create a temp function then fill it with args
    //store it then delete it
    const res = objectContext.tempFn(...restOfTheArgs);
    delete objectContext.tempFn;
    return res;
  };



  //---------------------apply polyfill----------------------------------5
  Function.prototype.apply = function (ObjContext, arrayOfArgs) {
    // I have fn defi in this keyword
    ObjContext.tempFn = this;
    const res = ObjContext.tempFn(...arrayOfArgs);
    delete ObjContext.tempFn;
    return res;
  };



  //---------------------bind polyfill--------------------------6
  Function.prototype.bind = function (objectContext, ...fixedArgs) {
    const oldFn = this; // this stay constant for 
    // a particular bind
    // only this function will be invoked every time
    return function (...nonFixedArgs) {
      return oldFn.call(objectContext, ...fixedArgs, ...nonFixedArgs);
      // what is the value of this key word here ???
      // this will change every time
    };
  };
  

  //----------------------flat polyfill------------------------7
  function myFlat(array, depth = 1) {
    const result = [];
    array.forEach((element)=>{
        if (Array.isArray(element) && depth > 0) {
          const miniAns = myFlat(element, depth - 1);
          result.push(...miniAns);
        } else {
          result.push(element);
        }
    })
    return result;
}
