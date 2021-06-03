export const initialState = {
  before: [],
  current: init,
  after: [],
};

export function reducer(state, action) {
  switch(action.type){
    case 'UNDO':
      return {
        after: [current, ...after],
        current: before[before.length - 1],
        before: before.slice(0, -1), 
      };
    case 'REDO':
      return { 
        before: [...before, current ],
        current: after[0],
        after: after.slice(1),
      };
    case 'RECORD':
      return {
          before: [...state, current]
        current:
        };
    default:
      return state;
  }
}
