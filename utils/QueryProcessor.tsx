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
    return ("myles");
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest")) {
    const numbers = query.match(/\d+/g);
    const num_list = numbers?.map((number) => parseInt(number));
    if (num_list === undefined) {
      return "The array is undefined";
    }

  if (num_list.length === 0) {
      return "The array is empty";
    }

    return (Math.max(...num_list).toString());
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
  
    return (num_list.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toString());
  }
  
  return "";
}


