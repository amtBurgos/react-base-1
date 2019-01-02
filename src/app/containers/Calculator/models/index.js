import { Record } from 'immutable';

export const CalculatorModel = Record({
  display: 0,
  operator: '',
  operation: '',
  prevValue: 0,
  nextValue: 0,
  newValue: false,
  resetDisplay: false,
});

export const setInitialState = (initialState) => {
  // eslint-disable-next-line no-param-reassign
  initialState.Calculator = new CalculatorModel(initialState.Calculator);
  return initialState;
};
