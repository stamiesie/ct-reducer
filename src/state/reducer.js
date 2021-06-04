/* eslint-disable max-len */
export const initialState = {
  before: [],
  current: '#FF0000',
  after: [],
};

export function reducer(state, action) {
  switch(action.type){
    case 'UNDO':
      return {
        after: [state.current, ...state.after],
        current: state.before[state.before.length - 1],
        before: state.before.slice(0, -1), 
      };
    case 'REDO':
      return { 
        before: [...state.before, state.current],
        current: state.after[0],
        after: state.after.slice(1),
      };
    case 'RECORD':
      return {
        before: [...state.before, state.current],
        after: [...state.after],
        current: action.payload,
      };
    default:
      throw new Error('Error!!!!!');
  }
}
