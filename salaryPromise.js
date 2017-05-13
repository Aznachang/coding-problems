// Promise Practice - Finding Disposable Income after Taxes and Rent on Salary

// Salary for one person
const getSalary = salary => {
  return new Promise ( (resolve, reject) => {
    // pass salary to subtractTax
    resolve(salary);
  });
}

// sum all salaries
const getSalaryTotal = () => {
  // this works because getSalary is only invoked
  // and these calls are independent to find salary sum
  return Promise.all([
    getSalary(25000),
    getSalary(30000),
    getSalary(35000),
    getSalary(10000)])
  .then(salaries => {
  console.log(salaries);
    return salaries.reduce( (prev, curr) => prev + curr);
  });
}

const subtractTax = salary => {
  return new Promise ( (resolve, reject) => {
    // pass this to subTractRent
    resolve(salary * 0.8); // 100000 * 0.8
  })
}

const subtractRent = salaryAfterTax => {
  return new Promise ( (resolve, reject) => {
    // 80000
    resolve(salaryAfterTax - 5000);
  });
}

// return the Disposable Income
const getDisposableIncome = cb => {
  // promise chain - salary -> tax -> rent
  // then waits for getSalary's promise to end
  return getSalaryTotal()
    .then(subtractTax)
    .then(subtractRent);
}

// example call to getDisposableIncome
getDisposableIncome().then(disposable => {
  // should be 75000
  console.log(disposable);
});