import { HANDLE_FLIP, WARNING, HANDLE_THEME } from "../actions/actions";

const reducer = (state, action) => {
  switch (action.type) {
    case HANDLE_FLIP: {
      const updatedFlipStates = state.flipStates.map((flipState, index) =>
        index === action.payload ? true : flipState
      );

      return {
        ...state,
        flipStates: updatedFlipStates,
      };
    }

    case WARNING:
      alert("You cannot view this advent day yet");
      return state;

    case HANDLE_THEME:
        const updatedTheme = state.themeState === 'light-mode' ? 'dark-mode' : 'light-mode'
        return {
          ...state,
          themeState:updatedTheme
        }

    default:
      throw new Error(`No matching "${action.type}" action type`);
  }
};

export default reducer;