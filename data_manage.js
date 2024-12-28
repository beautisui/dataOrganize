export const numberOfEmployed = (records) => {
  return records.filter(({ employed }) => employed).length;
};

export const peopleHaveCar = (records) => {
  return records.filter(({ ownsCar }) => ownsCar).length;
};

export const vaccinatedPets = (records) => {
  return records
    .map(
      (person) =>
        person.pets.filter((petsDetails) => petsDetails.fullyVaccinated).length
    )
    .reduce((sum, num) => sum + num, 0);
};

const nameAndType = (record) => {
  return record.pets.map(({ name, breed }) => [name, breed]);
};

export const petsNameWithType = (records) => {
  return records.flatMap(nameAndType);
};

export const cities = (records) => {
  return records.map(({ city }) => city);
};

export const totalHobbies = (records) => {
  const hobbie = [...new Set(records.flatMap(({ hobbies }) => hobbies))];

  return { totalHobbies: hobbie.length, hobbie };
};

const averageOf = (numberList) => {
  const sumOfNumbers = numberList.reduce((sum, number) => sum + number, 0);

  return sumOfNumbers / numberList.length;
};

export const averageAge = (records) => {
  return averageOf(records.map(({ age }) => age));
};

export const studiedCsAndHavepets = (records) => {
  const csStudentsDetail = records.filter(
    ({ education }) => education === "computer science"
  );

  const csStudentWithpets = csStudentsDetail.filter(
    ({ pets }) => pets.length !== 0
  );

  return csStudentWithpets.length;
};

export const personWithMoreThan2pets = (records) => {
  return records.filter(({ pets }) => pets.length > 1).length;
};

export const petsAndFavActivities = function (records) {
  const petsList = records.flatMap(({ pets }) => pets);

  return petsList
    .filter(({ favActivities }) => favActivities.length !== 0)
    .flatMap(({ name, favActivities }) => [name, favActivities]);
};

export const petsOfBengloreAndChennai = function (records) {
  const place = ["Bangalore", "chennai"];
  const citizenOfBengloreChennai = records.filter(
    ({ city }) => city.includes(place[0]) || city.includes(place[1])
  );

  return citizenOfBengloreChennai.flatMap(({ pets }) =>
    pets.map(({ name }) => name)
  );
};

export const vaccinatedPetsOfCarLessOwner = (records) => {
  const carLessPeople = records.filter(({ ownsCar }) => !ownsCar);
  const petsDetails = carLessPeople.flatMap(({ pets }) => pets);

  return petsDetails.filter(({ vaccination }) => vaccination).length;
};

export const moreThan2Hobbies = (records) => {
  return records.filter(({ hobbies }) => hobbies.length > 2).length;
};

export const commonPetType = (records) => {
  const petsArray = records.flatMap(({ pets }) => pets);
  const petTypes = petsArray.flatMap(({ breed }) => breed);
  const uniquepets = [...new Set(petTypes)];

  const occurancesDetails = uniquepets.map((petType) => {
    const occurances = petTypes.filter((type) => type === petType).length;
    return { times: occurances, types: petType };
  });

  const occurrenceList = occurancesDetails.map(({ times }) => times);
  const heighestOccurance = Math.max(...occurrenceList);
  return occurancesDetails.find(({ times }) => times === heighestOccurance)
    .types;
};

export const youngestPet = (records) => {
  const petsNameAges = records.flatMap(({ pets }) =>
    pets.map(({ name, age }) => ({ name, age }))
  );
  const ageList = petsNameAges.map(({ age }) => age);
  const lowestAge = Math.min(...ageList);

  return petsNameAges.find(({ age }) => age === lowestAge).name;
};

export const unEmployedPeoplePets = (record) => {
  const unemployedPeopleDetails = record.filter(({ employed }) => !employed);

  return unemployedPeopleDetails.reduce((sum, a) => sum + a.pets.length, 0);
};

export const peopleLiveInCityStartsWithB = (records) => {
  return records.filter(({ city }) => city.startsWith("B")).length;
};

export const peopleWithoutPets = (record) => {
  const petslessPeopleDetails = record.filter(({ pets }) => pets.length === 0);

  return petslessPeopleDetails.map(({ name }) => ({ name }));
};
