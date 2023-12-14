import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor(props){
    super(props)
    this.state ={
      Images : 0
    }
  }

  Aheadimage=()=>{
    if(this.state.Images <2){
      this.setState({Images:this.state.Images+1})
    }
    else{
      this.setState({Images:0})
    }
  }
  
  Reverseimage=()=>{
    if(this.state.Images>0){
      this.setState({Images:this.state.Images-=1})
    }
    else{
      this.setState({Images:2})
    }
  }

  render() {
    return(
      <div className="content">
        <div className="reverse" onClick={this.Aheadimage}>
          <ArrowBackIosIcon/>
        </div>

        <div className="header">
          {images[this.state.Images].title}
        </div>
        <img src={images[this.state.Images].img} alt="Image" />
        <div className="title">
          {images[this.state.Images].subtitle}
        </div>

        <div className="ahead" onClick={this.Reverseimage}>
          <ArrowForwardIosIcon/>
        </div>
      </div>
    );

  }
}

export default Carousel;