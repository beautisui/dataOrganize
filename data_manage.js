const Rahul = {
  name: "Rahul",
  age: null,
  city: "Pune",
  occupation: "software engineer",
  hobbies: ["gardening"],
  pet: [
    {
      breed: "golden retriver",
      name: "Max",
      age: 4,
      vaccination: true,
      fullyVaccinated: true,
      likes: ["loves playing in the park"],
    },
  ],
  employed: true,
  ownsCar: true,
  education: "computer science",
};

const Ananya = {
  name: "Ananya",
  city: "Bangalore",
  age: 30,
  hobbies: ["cooking", "often experiments with Italian recipes"],
  pet: [
    {
      breed: "bird",
      name: "Kiwi",
      age: 20,
      vaccination: true,
      fullyVaccinated: false,
      likes: ["mimics Ananya's voice"],
    },
  ],
  employed: false,
  ownsCar: false,
  education: "computer science",
};

const Ramesh = {
  name: "Ramesh",
  age: 45,
  occupation: "business owner",
  city: "Jaipur",
  hobbies: [
    "cooking",
    "reading historical fiction",
    "tending to his rose garden",
  ],
  pet: [
    {
      breed: "cat",
      name: "Bella",
      vaccination: true,
      fullyVaccinated: true,
      age: 3,
      likes: ["love lounging in the sun"],
    },
    {
      breed: "cat",
      name: "leo",
      vaccination: true,
      fullyVaccinated: true,
      age: 3,
      likes: ["love lounging in the sun"],
    },
  ],
  employed: true,
  ownsCar: false,
  education: null,
};

const Kavya = {
  name: "Kavya",
  age: 28,
  occupation: "dancer",
  city: "chennai",
  hobbies: [
    "prefers modern fantasy novels",
    "binge-watching sci-fi shows in downtime",
  ],
  pet: [
    {
      breed: "rabbit",
      name: "Snowy",
      age: 2,
      vaccination: true,
      fullyVaccinated: false,
      likes: ["enjoys hopping around her backyard", "nibbling on carrots"],
    },
  ],
  employed: false,
  ownsCar: false,
  education: null,
};

const details = [Rahul, Ananya, Ramesh, Kavya];

//*************************TEST***********************************

const NumberOfEmployed = (records) => {
  return records.filter(({ employed }) => employed).length;
};

const peopleHaveCar = (records) => {
  return records.filter(({ ownsCar }) => ownsCar).length;
};

const fullVaccinatedPetsCount = (totalVaccinated, record) => {
  const { pet: petDetails } = record;
  totalVaccinated += petDetails.filter(
    ({ fullyVaccinated }) => fullyVaccinated
  ).length;
  return totalVaccinated;
};

const vaccinatedPets = (records) => {
  return records.reduce(fullVaccinatedPetsCount, 0);
};

const nameAndType = (record) => {
  return record.pet.map(({ name, breed }) => [name, breed]);
};

const petNameWithType = (records) => {
  return records.flatMap(nameAndType);
};

const cities = (records) => {
  return records.map(({ city }) => city);
};

const totalHobbies = (records) => {
  const hobbie = [...new Set(records.flatMap(({ hobbies }) => hobbies))];

  return { tatalHobbies: hobbie.length, hobbies: hobbie };
};

const averageOf = (numberList) => {
  const sumOfNumbers = numberList.reduce((sum, number) => sum + number, 0);
  return sumOfNumbers / numberList.length;
};

const averageAge = (records) => {
  return averageOf(records.map(({ age }) => age));
};

const studiedCsAndHavePets = (records) => {
  const csStudentsDetail = records.filter(
    ({ education }) => education === "computer science"
  );

  const csStudentWithPets = csStudentsDetail.filter(
    ({ pet }) => pet.length !== 0
  );

  return csStudentWithPets.length;
};

const personWithMoreThan2pets = (records) => {
  return records.filter(({ pet }) => pet.length > 1).length;
};

const petsHaveLikes = function (records) {
  const petList = records.flatMap(({ pet }) => pet);
  return petList
    .filter(({ likes }) => likes.length !== 0)
    .map(({ name, likes }) => [name, likes].flat());
};

const petsOfBengloreAndChennai = function (records) {
  const place = ["Bangalore", "chennai"];
  const citizenOfBengloreChennai = records.filter(
    ({ city }) => city.includes(place[0]) || city.includes(place[1])
  );
  return citizenOfBengloreChennai.flatMap(({ pet }) =>
    pet.map(({ name }) => name)
  );
};

const vaccinatedPetsOfCarLessOwner = (records) => {
  const carLessPeople = records.filter(({ ownsCar }) => !ownsCar);
  const petDetails = carLessPeople.flatMap(({ pet }) => pet);
  return petDetails.filter(({ vaccination }) => vaccination).length;
};

const moreThan2Hobbies = (records) => {
  return records.filter(({ hobbies }) => hobbies.length > 2).length;
};

const commonPetType = (records) => {
  const petArray = records.flatMap(({ pet }) => pet);
  const petNames = petArray.flatMap(({ breed }) => breed);
  const uniquePets = [...new Set(petNames)];

  const occurancesDetails = uniquePets.map((pet) => {
    const occurances = petNames.filter((x) => x === pet).length;
    return { times: occurances, types: pet };
  });
  const occurrenceList = occurancesDetails.map(({ times }) => times);
  const heighestOccurance = Math.max(...occurrenceList);
  return occurancesDetails.find(({ times }) => times === heighestOccurance)
    .types;
};

const youngestPet = (records) => {
  const petsNameAges = records.flatMap(({ pet }) =>
    pet.map(({ name, age }) => ({ name, age }))
  );
  const ageList = petsNameAges.map(({ age }) => age);
  const lowestAge = Math.min(...ageList);
  return petsNameAges.find(({ age }) => age === lowestAge).name;
};

const unEmployedPeoplePets = (record) => {
  const unemployedPeopleDetails = record.filter(({ employed }) => !employed);
  return unemployedPeopleDetails.map(({ pet }) => pet).length;
};

const peopleWhoLiveInCityStartsWithB = (records) => {
  return records.filter(({ city }) => city.at(0) === "B").length;
};

const petLessPeople = (record) => {
  const petlessPeopleDetails = record.filter(({ pet }) => pet.length === 0);
  return petlessPeopleDetails.map(({ name }) => ({ name }));
};

const getQuestionAns = (Qn, fn) => {
  console.log("Question:", Qn);
  console.log("Answer  :", fn(details));
};

function testAll() {
  getQuestionAns(
    "1. How many individuals are currently employed?",
    NumberOfEmployed
  );
  getQuestionAns("2. How many people own a car?", peopleHaveCar);
  getQuestionAns("3. How many pets are fully vaccinated?", vaccinatedPets);
  getQuestionAns(
    "4. What are the names of all the pets, and what type of animal is each?",
    petNameWithType
  );
  getQuestionAns("5. Which cities do the individuals live in?", cities);
  getQuestionAns(
    "6. How many hobbies are shared across the group? What are they?",
    totalHobbies
  );
  getQuestionAns(
    "7. How many pets belong to people who are currently unemployed?.",
    unEmployedPeoplePets
  );
  getQuestionAns(
    "8. What is the average age of the individuals mentioned in the passage?",
    averageAge
  );
  getQuestionAns(
    "9. How many individuals have studied computer science, and how many of them have pets?",
    studiedCsAndHavePets
  );
  getQuestionAns(
    "10. How many individuals own more than one pet?",
    personWithMoreThan2pets
  );
  getQuestionAns(
    "11. Which pets are associated with specific favorite activities?",
    petsHaveLikes
  );
  getQuestionAns(
    "12. What are the names of all animals that belong to people who live in Bangalore or Chennai?.",
    petsOfBengloreAndChennai
  );
  getQuestionAns(
    "13. How many vaccinated pets belong to people who do not own a car?",
    vaccinatedPetsOfCarLessOwner
  );
  getQuestionAns(
    "14. What is the most common type of pet among the group?.",
    commonPetType
  );
  getQuestionAns(
    "15. How many individuals have more than two hobbies?",
    moreThan2Hobbies
  );
  getQuestionAns(
    "17. Which pet is the youngest, and what is its name?",
    youngestPet
  );
  getQuestionAns(
    "19. How many individuals live in cities starting with the letter B?",
    peopleWhoLiveInCityStartsWithB
  );
  getQuestionAns("20. Which individuals do not own any pets?", petLessPeople);
}

testAll();
