import { SET_SLIDER } from "./index"

export const setSlider=(data: {}): object=>{
    return {type: "SET_SLIDER", payload: data}
}