// normalize addition of two fractions
// (a/b) + (c/d)
const fractions = (a, b, c, d) => {
  let nom = (a*d + c*b);
  let denom = (b*d);

  const gcd = (up, low) => {
    return !low ? up: gcd(low, up % low);
  }
  let divisor = gcd(nom/denom);
  return `${nom}/${divisor} / ${denom}/${divisor}`;
};