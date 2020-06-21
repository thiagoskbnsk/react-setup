const INITIAL_STATE = {
  exampleValue: false,
};

const exampleReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case 'EXAMPLE': {
      return {
        ...state,
        exampleValue: action.payload.exampleValue,
      };
    }
    default: {
      return state;
    }
  }
};

export default exampleReducer;
