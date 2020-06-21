const EXAMPLE = 'EXAMPLE';

export const exampleAction = exampleValue => ({
  type: EXAMPLE,
  payload: {
    exampleValue,
  },
});
