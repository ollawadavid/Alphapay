import { faker } from '@faker-js/faker';

// Renaming the function to randomName
export const randomName = () => {
  return faker.person.findName(); 
};

// Function to generate random email
export const randomEmail = () => {
  return faker.internet.email();  
};

// Function to generate a random 11-digit number
export const random11DigitNumber = () => {
  return faker.random.numeric(11);  
};

// Function to generate a random number up to 1,000,000,000
export const randomNumberUpToBillion = () => {
  return faker.datatype.number({ max: 1000000000 }).toString();  
};
