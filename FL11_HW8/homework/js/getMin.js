function getMin(...args) {
  let min = args[0];

  for(let i = 0; i < args.length; i++) {
    if(args[i] < min) {
      min = args[i];
    }
  }

  return min;
}

getMin(3,0,-3);