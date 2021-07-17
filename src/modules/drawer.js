const OPEN_DRAWER = 'drawer/OPEN_DRAWER';
const CLOSE_DRAWER = 'drawer/CLOSE_DRAWER';

export const openDrawer = () => ({
  type: OPEN_DRAWER,
});
export const closeDrawer = () => ({
  type: CLOSE_DRAWER,
});

const initialState = {
  isDrawerOpen: false,
};

const drawer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        ...state,
        isDrawerOpen: true,
      };
    case CLOSE_DRAWER:
      return {
        ...state,
        isDrawerOpen: false,
      };
    default:
      return state;
  }
};

export default drawer;
