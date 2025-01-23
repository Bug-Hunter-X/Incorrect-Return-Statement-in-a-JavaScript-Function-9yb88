function foo(a, b) {
  if (a === 0) {
    return b; //Correct return statement
  } else if (b === 0) {
    return a; //Correct return statement
  } else {
    return a + b;
  }
}