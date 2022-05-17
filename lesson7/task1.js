let i = 0;
let a;
let b;
function hello() {
  const bye = () => {
  }

  bye()

  if (i === 0) {
    b = bye
  }
  a = bye

  i++
}

hello()
console.log(hello === hello)
console.log(a === b)
hello()
console.log(a === b)