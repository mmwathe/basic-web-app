export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "What is an Andrew ID? An Andrew ID is a unique identifier for " +
      "students, faculty, and staff at Carnegie Mellon University. It is " +
      "used to access a variety of university services, including email, " +
      "Wi-Fi, and library resources."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "myles";
  }

  if (
    query
      .toLowerCase()
      .includes("which of the following numbers is the largest")
  ) {
    const numbers = query.match(/\d+/g);
    const num_list = numbers?.map((number) => parseInt(number));
    if (num_list === undefined) {
      return "The array is undefined";
    }

    if (num_list.length === 0) {
      return "The array is empty";
    }

    return Math.max(...num_list).toString();
  }

  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g);
    const num_list = numbers?.map((number) => parseInt(number));
    if (num_list === undefined) {
      return "The array is undefined";
    }

    if (num_list.length === 0) {
      return "The array is empty";
    }

    return num_list
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      .toString();
  }

  if (query.toLowerCase().includes("square and a cube")) {
    const numbers = query.match(/\d+/g);
    const num_list = numbers?.map((number) => parseInt(number));
    if (num_list === undefined) {
      return "The array is undefined";
    }

    if (num_list.length === 0) {
      return "The array is empty";
    }

    for (let i = 0; i < num_list.length; i++) {
      let num = num_list[i];
      const squareRoot = Math.sqrt(num);
      const isSquare = Number.isInteger(squareRoot);

      // Check if the cube root is an integer
      const cubeRoot = Math.cbrt(num);
      const isCube = Number.isInteger(cubeRoot);

      if (isSquare && isCube) {
        return num.toString();
      }
    }

    return num_list
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      .toString();
  }

  if (query.toLowerCase().includes("multiplied")) {
    const numbers = query.match(/\d+/g);
    const num_list = numbers?.map((number) => parseInt(number));
    if (num_list === undefined) {
      return "The array is undefined";
    }

    if (num_list.length === 0) {
      return "The array is empty";
    }

    return (num_list[0] * num_list[1]).toString();
  }

  function isPrime(number: number) {
    // Check if the number is less than 2, as numbers less than 2 are not prime
    if (number < 2) {
        return false;
    }

    // Check for divisibility by numbers up to the square root of the given number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        // If the number is divisible by any number other than 1 and itself, it's not prime
        if (number % i === 0) {
            return false;
            break; // This line can be added to explicitly break out of the loop
        }
    }

    // If no divisors other than 1 and itself are found, the number is prime
    return true;
  }

  if (query.toLowerCase().includes("primes")) {
    const numbers = query.match(/\d+/g);
    const num_list = numbers?.map((number) => parseInt(number));
    if (num_list === undefined) {
      return "The array is undefined";
    }

    if (num_list.length === 0) {
      return "The array is empty";
    }
    let result= []
    for (let i = 0; i < num_list.length; i++) {
      if (isPrime(num_list[i])) {
        result.push(num_list[i])
      }
    }

    return result.join(", ");
  }

  return "";
}
