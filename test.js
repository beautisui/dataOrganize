export const test = (description, testFn) => {
  const result = testFn();
  const mark = result ? "✅" : "❌";
  console.log(mark, description, "\n");
};

export const groupTest = (groupName, tests) => {
  console.log(groupName);
  console.log("-".repeat(groupName.length));
  tests();
  console.log("");
};

const isEqual = (a, b) => a === b;

export const areEqual = (a, b) => {
  console.log("Expected: ", a, "Actual", b);
  if (!Array.isArray(a)) return isEqual(a, b);

  if (a.length !== b.length) return false;

  return a.every((element, index) => areEqual(element, b[index]));
};
