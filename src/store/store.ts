import { createStore, combineReducers } from "redux";
import { sliderComponentReducer } from "./reducer/sliderComponentReducer";

// const initialState = {
//   displaySlider: false
// };

const rootReducer = combineReducers({
 sliderReducer: sliderComponentReducer
});

export const store = createStore(rootReducer);
