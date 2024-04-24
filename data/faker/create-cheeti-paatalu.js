const { faker } = require("@faker-js/faker");
const path = require("path");
const fs = require("fs");

function createCheetiPaatalu(count = 20) {
  const cheetiList = [];
  for (let i = 0; i <= count; i++) {
    const cheetiValue = (i % 3 || 1) * 1e5;
    const cheetiTenure = (i % 2 || 1) * 10;
    const cheeti = {
      cheetiId: faker.string.uuid(),
      cheetiName: faker.word.noun(),
      cheetiValue,
      monthlyPremium: cheetiValue / cheetiTenure,
      managerName: faker.person.fullName(),
      cheetiTenure,
      cheetiStartYear: faker.number.int({ min: 2012, max: 2023 }),
      cheetiStartMonth: faker.number.int({ min: 1, max: 12 }),
    };
    cheetiList.push(cheeti);
  }
  return cheetiList;
}

const cheetilu = createCheetiPaatalu(20);

fs.writeFile(
  path.resolve(__dirname, "../samples/cheeti-paatalu.json"),
  JSON.stringify(cheetilu),
  (err) => {
    if (err) {
      console.log("Error occurred while writing to file");
      console.error(err);
    } else {
      console.log("File written successfully");
    }
  }
);
