import { SET_SLIDER } from "../index";


const initialState = {
  displaySlider: true
}


export const sliderComponentReducer = (state = initialState, action: {type: string, payload: boolean}) => {

  switch (action.type) {
    case SET_SLIDER:
      return {
        ...state,
        displaySlider: action.payload
      };

    default: {
      return { ...state };
    }
  }
};