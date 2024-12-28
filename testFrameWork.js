import { details } from "./data.js";
import * as fn from "./data_manage.js";
import { test, areEqual, groupTest } from "./test.js";

const [Rahul, Ananya, Ramesh, Kavya] = details;

groupTest("1. How many individuals are currently employed?", () => {
  test("one one is employeed", () => {
    return areEqual(
      0,
      fn.numberOfEmployed([
        { ...details.Rahul, employed: false },
        { ...Ananya, employed: false },
      ])
    );
  });
  test("everyone are employeed", () => {
    return areEqual(
      2,
      fn.numberOfEmployed([
        { ...Ramesh, employed: true },
        { ...Rahul, employed: true },
      ])
    );
  });
  test("one person is employeed", () => {
    return areEqual(
      1,
      fn.numberOfEmployed([
        { ...Ramesh, employed: true },
        { ...Ananya, employed: false },
        { ...Rahul, employed: false },
      ])
    );
  });
});

groupTest("2. How many individuals have cars", () => {
  test("no one has car", () => {
    return areEqual(
      0,
      fn.peopleHaveCar([
        { ...Rahul, ownsCar: false },
        { ...Ananya, ownsCar: false },
      ])
    );
  });

  test("everyone has car", () => {
    return areEqual(
      4,
      fn.peopleHaveCar([
        { ...Rahul, ownsCar: true },
        { ...Ananya, ownsCar: true },
        { ...Kavya, ownsCar: true },
        { ...Ramesh, ownsCar: true },
      ])
    );
  });
});

groupTest("3. How many pets are fully vaccinated?", () => {
  test("1 pet is Vaccinated", () => {
    return areEqual(
      0,
      fn.vaccinatedPets([
        { name: "beauti", pets: [{ name: "kwie", fullyVaccination: false }] },
        { name: "Mallika", pets: [{ name: "Citty", fullyVaccination: false }] },
      ])
    );
  });

  test("2 pets are Vaccinated", () => {
    return areEqual(3, fn.vaccinatedPets(details));
  });
  test("Rahul's 1 pet", () => {
    return areEqual(1, fn.vaccinatedPets([Rahul]));
  });
});

groupTest(
  "4. What are the names of all the pets, and what type of animal is each?",
  () => {
    test("All Pet name and type", () => {
      return areEqual(
        [
          ["Max", "golden retriver"],
          ["Kiwi", "bird"],
          ["Bella", "cat"],
          ["leo", "cat"],
          ["Snowy", "rabbit"],
        ],
        fn.petsNameWithType(details)
      );
    });

    test("Rahul's Pet name and type", () => {
      return areEqual(
        [["Max", "golden retriver"]],
        fn.petsNameWithType([Rahul])
      );
    });

    test("Rahul's Pet name and type", () => {
      return areEqual(
        [["Kitty", "Cat"]],
        fn.petsNameWithType([
          { name: "Raj", pets: [{ name: "Kitty", breed: "Cat" }] },
        ])
      );
    });
  }
);
