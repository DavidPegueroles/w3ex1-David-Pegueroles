import patients from "../index.js";

const arrayToObject = (array) => {
  const returnObject = {};
  returnObject.nPatients = array.length;

  return returnObject;
};

export default arrayToObject;

arrayToObject();

describe("Given a function arrayToObject", () => {
  describe("When it receives 'patiens'", () => {
    test("It should return it's length", () => {
      const arrayToTest = patients;
      const expectedNumber = { nPatients: 6 };

      const numberOfPatients = arrayToObject(arrayToTest);

      expect(numberOfPatients).toEqual(expectedNumber);
    });
  });
});

// {
//     nPatients: (número de pacientes),
//     nAdults: (número de pacientes mayores de edad),
//     nDiabeticMen: (número de pacientes hombres con dieta para diabetes),
//     totalDaysInHospital: (suma de los días de ingreso de todos los pacientes),
//     averageAgeWomen: (edad media de las pacientes mujeres)
// }
