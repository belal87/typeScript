export {};

function printUserId<X>(userId: X) {
  console.log(`user id ${userId}`);
}
printUserId("101");
printUserId(102);
printUserId(true);
printUserId({ id: 101 });
