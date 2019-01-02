import { Record } from 'immutable';

const MainModel = Record({
  id: 0,
  src: '',
  alt: '',
  name: '',
  width: 0,
});

const setInitialState = (initialState) => {
  // eslint-disable-next-line no-param-reassign
  initialState.Main = new MainModel();
  return initialState;
};

export { MainModel, setInitialState };
