// Fibonacci - using the previous two results
const fibonacci = (n, fibo=[0,1])=> {
  if(n === 0) return fibo[0];
  if(n === 1) return fibo[1];
  for(i=2; i<=n; i++) {
    fibo[i] = fibo[i-1] + fibo[i-2];
  }
  return fibo[i-1];
}