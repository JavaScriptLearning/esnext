export const basicArrow = `function (item) {
  return item.value + 1;
}

(item) => {
  return item.value + 1;
}
`;

export const arrowDestructed = `({ value }) => {
  return value + 1;
}
`;

export const implicit = `({ value }) => value + 1;`;
