function outerOuterFunction() {
  let outerOuterFuncVar = "outside outside";
  return function outerFunction() {
    let outerFuncVar = "outside";
    function innerFunction() {
      console.log(`The outerFunction value is: ${outerFuncVar}`);
      console.log(`The outerOuterFunction value is: ${outerOuterFuncVar}`);
    }
    return innerFunction;
  };
}
