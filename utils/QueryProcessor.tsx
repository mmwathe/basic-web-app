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

  return "";
}
