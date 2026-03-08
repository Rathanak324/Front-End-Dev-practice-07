import React from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const [CurrentImg, setCurrentImg] = useState(0);
  const [PreviousImg, setPreviousImg] = useState(8);
  const [NextImg, setNextImg] = useState(1);

  /* You will need to hanle the click on left and right button */

  function handleLeftArrow(){

    setNextImg(CurrentImg);
    setCurrentImg(PreviousImg);
    if((CurrentImg - +1 ) >= 0){
      setPreviousImg(CurrentImg-1)
    }else{
      FirstImage();
    }
    console.log(CurrentImg);
  }

  function handleRightArrow(){

    setPreviousImg(CurrentImg);
    setCurrentImg(NextImg);
    if((CurrentImg + +1) <= 8){
      setNextImg(CurrentImg + 1);
    }else{
      LastImage();
    }
    console.log(CurrentImg);
  }
  /* You will need to manage the cases when we are on the last image or first image*/

  function LastImage(){
    setNextImg(0);
  }

  function FirstImage(){
    setPreviousImg(8);
  }

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleLeftArrow}/>

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[CurrentImg].src} alt={images[CurrentImg].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleRightArrow}/>
    </div>
  );
};
