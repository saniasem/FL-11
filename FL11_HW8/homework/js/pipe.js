function addOne(x) {
  return x + 1;
}

function pipe(num, ...args) {
  args.forEach( item => {
    num = item(num)
  });
  return num;
}

pipe(1, addOne);
pipe(1, addOne, addOne);