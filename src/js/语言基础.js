function foo() {
  console.log(age);
  var age = 26;
}

foo();

/*if (true) {
  let age = 26;
  console.log(age);

}
console.log(age);*/

console.log(foo.constructor)
console.log(foo.toLocaleString())
console.log(foo.toString())
console.log(foo.valueOf())
