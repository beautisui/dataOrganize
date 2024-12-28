import * as fn from "./data_manage.js";
import { getQuestionAns } from "./answers.js";

getQuestionAns(
  "1. How many individuals are currently employed?",
  fn.numberOfEmployed,
  2
);

getQuestionAns("2. How many people own a car?", fn.peopleHaveCar);

getQuestionAns("3. How many pets are fully vaccinated?", fn.vaccinatedPets);
getQuestionAns(
  "4. What are the names of all the pets, and what type of animal is each?",
  fn.petsNameWithType
);
getQuestionAns("5. Which cities do the individuals live in?", fn.cities);
getQuestionAns(
  "6. How many hobbies are shared across the group? What are they?",
  fn.totalHobbies
);
getQuestionAns(
  "7. How many pets belong to people who are currently unemployed?.",
  fn.unEmployedPeoplePets
);
getQuestionAns(
  "8. What is the average age of the individuals mentioned in the passage?",
  fn.averageAge
);
getQuestionAns(
  "9. How many individuals have studied computer science, and how many of them have pets?",
  fn.studiedCsAndHavepets
);
getQuestionAns(
  "10. How many individuals own more than one pets?",
  fn.personWithMoreThan2pets
);
getQuestionAns(
  "11. Which pets are associated with specific favorite activities?",
  fn.petsAndFavActivities
);
getQuestionAns(
  "12. What are the names of all animals that belong to people who live in Bangalore or Chennai?.",
  fn.petsOfBengloreAndChennai
);
getQuestionAns(
  "13. How many vaccinated pets belong to people who do not own a car?",
  fn.vaccinatedPetsOfCarLessOwner
);
getQuestionAns(
  "14. What is the most common type of pets among the group?.",
  fn.commonPetType
);
getQuestionAns(
  "15. How many individuals have more than two hobbies?",
  fn.moreThan2Hobbies
);
getQuestionAns(
  "17. Which pets is the youngest, and what is its name?",
  fn.youngestPet
);
getQuestionAns(
  "19. How many individuals live in cities starting with the letter B?",
  fn.peopleLiveInCityStartsWithB
);
getQuestionAns(
  "20. Which individuals do not own any pets?",
  fn.peopleWithoutPets
);
