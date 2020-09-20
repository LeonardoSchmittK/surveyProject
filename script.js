const rand = (min, max) => {
  const minimum = Number(Math.round(min));
  const maximum = Number(Math.round(max));
  const randomNum = Math.floor(
    Math.random() * (maximum - minimum + 1) + minimum
  );

  return calc(randomNum);
};

const calc = (randomNum) => {
  let result = ``;

  if (randomNum % 3 === 0 && randomNum % 5 === 0) {
    result = `${randomNum} is FizzBuzz`;
  } else if (randomNum % 3 === 0) {
    result = `${randomNum} is Fizz`;
  } else if (randomNum % 5 === 0) {
    result = `${randomNum} is Buzz`;
  } else {
    result = `${randomNum} is none of them`;
  }

  return console.log(result);
};

rand("1", 10000);
