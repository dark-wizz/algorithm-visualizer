export const genRandomArr = (min, max, n) => {
  return Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
};

export const xFromTranslate = (val = "") => {
  let prop = val.match(/translatex\(-?\d+.*?\)/i)?.[0] ?? "0";
  let x = prop?.match(/-?\d+/)[0] ?? 0;
  return +x;
};

