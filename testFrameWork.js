import { details } from "./data.js";
import * as fn from "./data_manage.js";
import { test, areEqual, groupTest } from "./test.js";

const [Rahul, Ananya, Ramesh, Kavya] = details;

groupTest("1. How many individuals are currently employed?", () => {
  test("one one is employeed", () =>
    areEqual(
      0,
      fn.numberOfEmployed([
        { ...Rahul, employed: false },
        { ...Ananya, employed: false },
      ])
    ));

  test("everyone are employeed", () =>
    areEqual(
      2,
      fn.numberOfEmployed([
        { ...Ramesh, employed: true },
        { ...Rahul, employed: true },
      ])
    ));

  test("one person is employeed", () =>
    areEqual(
      1,
      fn.numberOfEmployed([
        { ...Ramesh, employed: true },
        { ...Ananya, employed: false },
        { ...Rahul, employed: false },
      ])
    ));
});

groupTest("2. How many individuals have cars", () => {
  test("no one has car", () =>
    areEqual(
      0,
      fn.peopleHaveCar([
        { ...Rahul, ownsCar: false },
        { ...Ananya, ownsCar: false },
      ])
    ));

  test("everyone has car", () =>
    areEqual(
      4,
      fn.peopleHaveCar([
        { ...Rahul, ownsCar: true },
        { ...Ananya, ownsCar: true },
        { ...Kavya, ownsCar: true },
        { ...Ramesh, ownsCar: true },
      ])
    ));
});

groupTest("3. How many pets are fully vaccinated?", () => {
  test("1 pet is Vaccinated", () =>
    areEqual(
      0,
      fn.vaccinatedPets([
        { name: "beauti", pets: [{ name: "kwie", fullyVaccination: false }] },
        { name: "Mallika", pets: [{ name: "Citty", fullyVaccination: false }] },
      ])
    ));

  test("2 pets are Vaccinated", () => areEqual(3, fn.vaccinatedPets(details)));

  test("Rahul's 1 pet", () => areEqual(1, fn.vaccinatedPets([Rahul])));
});

groupTest(
  "4. What are the names of all the pets, and what type of animal is each?",
  () => {
    test("All Pet name and type", () =>
      areEqual(
        [
          ["Max", "golden retriver"],
          ["Kiwi", "bird"],
          ["Bella", "cat"],
          ["leo", "cat"],
          ["Snowy", "rabbit"],
        ],
        fn.petsNameWithType(details)
      ));

    test("Rahul's Pet name and type", () =>
      areEqual([["Max", "golden retriver"]], fn.petsNameWithType([Rahul])));

    test("Rahul's Pet name and type", () =>
      areEqual(
        [["Kitty", "Cat"]],
        fn.petsNameWithType([
          { name: "Raj", pets: [{ name: "Kitty", breed: "Cat" }] },
        ])
      ));
  }
);

groupTest("5. Which cities do the individuals live in?", () => {
  test("4 peersons City name", () =>
    areEqual(["Pune", "Bangalore", "Jaipur", "chennai"], fn.cities(details)));

  test("Anaya City after Change", () =>
    areEqual(["Kolkata"], fn.cities([{ Ananya, city: "Kolkata" }])));

  test("Ramesh City", () => areEqual(["Jaipur"], fn.cities([Ramesh])));
});

groupTest(
  "6. How many hobbies are shared across the group? What are they?",
  () => {
    test("Total Hobbies from details ", () =>
      areEqual(
        {
          totalHobbies: 7,
          hobbie: [
            "gardening",
            "cooking",
            "often experiments with Italian recipes",
            "reading historical fiction",
            "tending to his rose garden",
            "prefers modern fantasy novels",
            "binge-watching sci-fi shows in downtime",
          ],
        },
        fn.totalHobbies(details)
      ));
  }
);
