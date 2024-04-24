module.exports = {
  type: "object",
  properties: {
    cheetiId: { type: "string" },
    cheetiName: { type: "string" },
    cheetiValue: { type: "number" },
    monthlyPremium: { type: "number" },
    managerName: { type: "string" },
    cheetiTenure: { type: "number" },
    cheetiStartYear: { type: "number", minimum: 2000, maximum: 2050 },
    cheetiStartMonth: {
      type: "number",
      minimum: 1,
      maximum: 12,
    },
  },
  required: [
    "cheetiId",
    "cheetiName",
    "cheetiValue",
    "monthlyPremium",
    "managerName",
    "cheetiTenure",
    "cheetiStartYear",
    "cheetiStartMonth",
  ],
  additionalProperties: false,
};
