export type HSCode = {
  code: string;
  description: string;
  category: string;
  notes?: string;
};

export const hsCodes: HSCode[] = [
  { code: "0901.21", description: "Coffee, roasted, not decaffeinated", category: "Food & Beverage", notes: "Subject to standard import duty; phytosanitary certificate required." },
  { code: "1006.30", description: "Semi-milled or wholly milled rice", category: "Agriculture", notes: "Requires health certificate and origin documentation." },
  { code: "1701.99", description: "Cane or beet sugar, refined", category: "Agriculture", notes: "Quota and seasonal restrictions may apply." },
  { code: "2710.19", description: "Petroleum oils, other than crude", category: "Energy", notes: "Strategic commodity, special licensing." },
  { code: "3004.90", description: "Medicaments for therapeutic uses, packaged for retail", category: "Pharmaceuticals", notes: "Ministry of Health authorization required." },
  { code: "3923.21", description: "Sacks and bags of polymers of ethylene", category: "Plastics & Packaging" },
  { code: "4011.10", description: "New pneumatic tyres, rubber, for motor cars", category: "Automotive", notes: "Standards mark required." },
  { code: "4818.10", description: "Toilet paper, in rolls of a width not exceeding 36 cm", category: "Paper & Pulp" },
  { code: "5208.52", description: "Woven cotton fabrics, printed, plain weave", category: "Textiles" },
  { code: "6109.10", description: "T-shirts, singlets, knitted, of cotton", category: "Apparel" },
  { code: "6403.99", description: "Footwear with leather uppers, other", category: "Footwear" },
  { code: "7208.39", description: "Flat-rolled iron/steel, hot-rolled, < 3mm", category: "Metals & Steel", notes: "Anti-dumping duties may apply." },
  { code: "7308.30", description: "Doors, windows and frames of iron or steel", category: "Construction" },
  { code: "7610.10", description: "Aluminium doors, windows and frames", category: "Construction" },
  { code: "8418.10", description: "Combined refrigerator-freezers, separate doors", category: "Home Appliances", notes: "Energy efficiency standards apply." },
  { code: "8443.32", description: "Printers capable of connecting to ADP machines", category: "Electronics" },
  { code: "8471.30", description: "Portable ADP machines, weight ≤ 10 kg (laptops)", category: "Electronics" },
  { code: "8517.12", description: "Telephones for cellular networks (smartphones)", category: "Electronics", notes: "IMEI registration required for import." },
  { code: "8528.72", description: "Reception apparatus for television, colour", category: "Electronics" },
  { code: "8703.23", description: "Motor cars, spark-ignition engine, 1500–3000 cc", category: "Automotive", notes: "Vehicle import restrictions; high duty." },
  { code: "8708.29", description: "Other parts and accessories of motor vehicle bodies", category: "Automotive" },
  { code: "9018.39", description: "Catheters, cannulae and similar instruments", category: "Medical Devices" },
  { code: "9403.60", description: "Wooden furniture, other", category: "Furniture" },
  { code: "9405.40", description: "Other electric lamps and lighting fittings", category: "Lighting" },
  { code: "2523.29", description: "Portland cement, other than white", category: "Construction" },
  { code: "7113.19", description: "Articles of jewellery, of other precious metal", category: "Jewellery" },
  { code: "0805.10", description: "Oranges, fresh or dried", category: "Agriculture" },
  { code: "0802.32", description: "Walnuts, shelled", category: "Agriculture", notes: "Major Iranian export commodity." },
  { code: "0904.21", description: "Saffron (Crocus sativus)", category: "Agriculture", notes: "Premium Iranian export; origin certification critical." },
  { code: "2009.89", description: "Juice of any other single fruit or vegetable", category: "Food & Beverage" },
];
