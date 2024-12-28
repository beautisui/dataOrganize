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

    test("Change Data and Check hobbie:", () =>
      areEqual(
        { totalHobbies: 2, hobbie: ["Singing", "Writting Poem"] },
        fn.totalHobbies([
          {
            ...Ananya,
            hobbies: ["Singing", "Writting Poem"],
          },
        ])
      ));
  }
);

groupTest(
  "7. How many pets belong to people who are currently unemployed?.",
  () => {
    test("Total pets of Unemployed people", () =>
      areEqual(2, fn.unEmployedPeoplePets(details)));

    test("Total pets of Rahul(employed)", () =>
      areEqual(0, fn.unEmployedPeoplePets([Rahul])));

    test("Check for other data", () =>
      areEqual(
        2,
        fn.unEmployedPeoplePets([
          { employed: false, pets: [{ pet1: "Kitty" }, { pet2: "Tommy" }] },
          { employed: true, pets: [{ pet1: "Kitty" }, { pet2: "Tommy" }] },
        ])
      ));
  }
);

groupTest(
  "8. What is the average age of the individuals mentioned in the passage?",
  () => {
    test("Avg of all people ", () => areEqual(33.25, fn.averageAge(details))),
      test("Avg of 2 person", () =>
        areEqual(
          17.5,
          fn.averageAge([
            { name: "Beauti", age: 19 },
            { name: "Beauti", age: 16 },
          ])
        ));
  }
);

groupTest(
  "9. How many individuals have studied computer science, and how many of them have pets?",
  () => {
    test("check for All", () => areEqual(2, fn.studiedCsAndHavepets(details)));
    test("check for Only one", () =>
      areEqual(1, fn.studiedCsAndHavepets([Rahul])));
    test("check for Only one", () =>
      areEqual(
        2,
        fn.studiedCsAndHavepets([
          {
            name: "syam",
            education: "computer science",
            pets: [{ pet1: true }],
          },
          {
            education: "computer science",
            pets: [{ pet1: true }, { pet1: true }],
          },
          { pets: [{ pet1: true }, { pet1: true }], education: "Geography" },
        ])
      ));
  }
);

groupTest("10. How many individuals own more than one pets?", () => {
  test("Test for all people ", () =>
    areEqual(1, fn.personWithMoreThan2pets(details)));
  test("Test ", () =>
    areEqual(
      1,
      fn.personWithMoreThan2pets([
        { name: "Beatui", pets: [{ pet1: "kitty" }, { pet2: "tommy" }] },
        { name: "Sweety", pets: [{ pet1: "kitty" }] },
      ])
    ));
});

groupTest(
  "11. Which pets are associated with specific favorite activities?",
  () => {
    test("test for All", () =>
      areEqual(
        [
          "Max",
          ["loves playing in the park"],
          "Kiwi",
          ["mimics Ananya's voice"],
          "Bella",
          ["love lounging in the sun"],
          "leo",
          ["love lounging in the sun"],
          "Snowy",
          ["enjoys hopping around her backyard", "nibbling on carrots"],
        ],
        fn.petsAndFavActivities(details)
      )),
      test("test for All", () =>
        areEqual(
          ["jacky", ["singing", "whitelling"]],

          fn.petsAndFavActivities([
            {
              pets: [
                { name: "jacky", favActivities: ["singing", "whitelling"] },
              ],
            },
          ])
        ));
  }
);
groupTest(
  "12. What are the names of all animals that belong to people who live in Bangalore or Chennai?.",

  () => {
    test("Try for all the details", () =>
      areEqual(["Kiwi", "Snowy"], fn.petsOfBengloreAndChennai(details)));

    test("Try for all ohters", () =>
      areEqual(
        ["Kitty", "Tommy", "Tom"],
        fn.petsOfBengloreAndChennai([
          { city: "Bangalore", pets: [{ name: "Kitty" }, { name: "Tommy" }] },
          { city: "Chennai", pets: [{ name: "Tom" }] },
        ])
      ));
  }
);
