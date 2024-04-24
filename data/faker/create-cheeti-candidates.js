const { faker } = require("@faker-js/faker");
const fs = require("fs");
const path = require("path");

function createCheetiCandidates(count) {
  const candidateList = [];
  for (let i = 0; i < count; i++) {
    const candidate = {
      candidateId: faker.string.uuid(),
      candidateMobile: faker.phone.number(),
      candidateEmail: faker.internet.email(),
    };
    candidateList.push(candidate);
  }

  return candidateList;
}

const candidates = createCheetiCandidates(30);

fs.writeFile(
  path.resolve(__dirname, "../samples/cheeti-candidates.json"),
  JSON.stringify(candidates),
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Candidates information is written to file");
    }
  }
);
