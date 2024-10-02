function roll(num, faces, mod) {
  var total = 0;
  for (let i = 0; i < num; i++) {
    total += Math.floor((Math.random()*faces)+1);
  }
  return total + mod;
}
