export const genRandomArr = (min, max, n) => {
  return Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
};

