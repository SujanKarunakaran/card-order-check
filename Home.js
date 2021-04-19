import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import Footer from "./Footer";
import CardContainer from "./Card Container";
import CarouselContainer from "./CarouselContainer";
import ItemCards from "./ItemCards";




export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ""
    };
  }

  render() {
    return (
      <div>
    <CarouselContainer content={this.state.content}/>
    <br/>
    <Typography color="primary" variant="h4" align="center">
               New Arrivals
    </Typography>
    <br/>
    <ItemCards/>
    <Footer/>
    </div>
    );
  }
}
