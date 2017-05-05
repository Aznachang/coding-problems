// Promise Practice - Finding Disposable Income after Taxes and Rent on Salary

const getSalary = salary => {
  return new Promise ( (resolve, reject) => {
    // pass salary to subtractTax
    resolve(salary);
  });
}

const subtractTax = salary => {
  return new Promise ( (resolve, reject) => {
    // pass this to subTractRent
    resolve(salary * 0.8);
  })
}

const subtractRent = salaryAfterTax => {
  return new Promise ( (resolve, reject) => {
    resolve(salary - 5000);
  });
}

// return the Disposable Income
const getDisposableIncome = salary => {
  // promise chain - salary -> tax -> rent
  // then waits for getSalary's promise to end
  return getSalary(salary)
    .then(subtractTax)
    .then(subtractRent);
}

// example call to getDisposableIncome
getDisposableIncome(5000).then(disposable => {
  console.log(disposable);
});