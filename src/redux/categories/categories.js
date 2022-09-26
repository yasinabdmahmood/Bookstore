export const CHECK_STATUS = 'bookstore/catagories/CHECK_STATUS';

const initialState = [];

export default function catagoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default: return state;
  }
}

export const checkStatus = () => ({
  type: CHECK_STATUS,
});
