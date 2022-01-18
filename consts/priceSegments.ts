const percentDescount = 0.25;
export const priceSegments = [
  {
    viewCount: "10K PAGEVIEWS",
    montlyCost: 8,
    yerarlyCost: (1 - percentDescount) * 8,
    min: 0,
    max: 20,
  },
  {
    viewCount: "50K PAGEVIEWS",
    montlyCost: 12,
    yerarlyCost: (1 - percentDescount) * 12,
    min: 21,
    max: 40,
  },
  {
    viewCount: "100K PAGEVIEWS",
    montlyCost: 16,
    yerarlyCost: (1 - percentDescount) * 16,
    min: 41,
    max: 60,
  },
  {
    viewCount: "500K PAGEVIEWS",
    montlyCost: 24,
    yerarlyCost: (1 - percentDescount) * 24,
    min: 61,
    max: 80,
  },
  {
    viewCount: "1M PAGEVIEWS",
    montlyCost: 36,
    yerarlyCost: (1 - percentDescount) * 36,
    min: 81,
    max: 100,
  },
];
