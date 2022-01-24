const arrayToObject = (array) => {
  const returnObject = {};
  returnObject.nPatients = array.length;

  return returnObject;
};

const object = [
  {
    patient: {
      name: "Luis",
      age: 25,
      sex: "M",
    },
    daysInHospital: 3,
    diet: "Low fiber",
  },
  {
    patient: {
      name: "Marta",
      age: 56,
      sexo: "W",
    },
    daysInHospital: 5,
    diet: "Diabetes",
  },
  {
    patient: {
      name: "Julia",
      age: 38,
      sexo: "W",
    },
    daysInHospital: 1,
    diet: "Salt free",
  },
  {
    patient: {
      name: "Esteban",
      age: 40,
      sexo: "M",
    },
    daysInHospital: 3,
    diet: "Diabetes",
  },
  {
    patient: {
      name: "Arturo",
      age: 17,
      sexo: "M",
    },
    daysInHospital: 2,
    diet: "Low fiber",
  },
  {
    patient: {
      name: "Isabel",
      age: 63,
      sexo: "W",
    },
    daysInHospital: 6,
    diet: "Salt free",
  },
];

describe("Given a function arrayToObject", () => {
  describe("When it receives 'patiens'", () => {
    test("It should return it's length", () => {
      const arrayToTest = object;
      const expectedNumber = { nPatients: 6 };

      const numberOfPatients = arrayToObject(arrayToTest);

      expect(numberOfPatients).toEqual(expectedNumber);
    });
  });

  describe("When it receives 'patiens'", () => {
    test.only("It should return { nAdults: 6 }", () => {
      const arrayToTest = object;
      const expectedNumber = { nAdults: 6 };

      const numberOfPatients = arrayToObject(arrayToTest);

      expect(numberOfPatients).toEqual(expectedNumber);
    });
  });
});
