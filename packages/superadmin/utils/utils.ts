export const sleep = (time: number) =>
  new Promise((acc) => setTimeout(acc, time));