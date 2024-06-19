import React, { useReducer, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Slider.css";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {SET_SLIDER} from '../../store/index'


function Slider(): JSX.Element {

  const dispatch = useDispatch()

  // const [displaySlider, setDisplaySlider] = useState(false);

  type sliderComponentState = {
    displaySlider: boolean
  }

  type RootState = {
    sliderReducer:  sliderComponentState
  }

  const {displaySlider} = useSelector((state: RootState)=> state.sliderReducer)


  const handleCloseIconClick = ()=>{
    dispatch({type: SET_SLIDER, payload: false })
  }


  return (
    <div className={`slider ${displaySlider ? 'display' : 'hide'}`}>
      <div className="top-section">
      <AiOutlineCloseCircle onClick={handleCloseIconClick} className="close-icon" size={30} />
        <div className="sign-in-label-icon">
          <span>Sign in </span>
          <FaRegUserCircle size={30} />
        </div>
        <div className="slider-heading">
            <h2>
          Browse <br />
          QUICK SHOP-E
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Slider;
