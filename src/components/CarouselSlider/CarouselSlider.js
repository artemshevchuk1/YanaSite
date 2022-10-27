import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Photo1 from '../Photo/photo1.jpg';
import Photo2 from '../Photo/photo2.jpg';
import Photo3 from '../Photo/photo3.jpg';

export default class CarouselSlider extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Photo1} alt="Photo1" />
          <Carousel.Caption>
            <h3>Перша фотка</h3>
            <p>lorem loremloremloremloremloremlorem</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Photo2} alt="Photo1" />
          <Carousel.Caption>
            <h3>Друга фотка</h3>
            <p>lorem loremloremloremloremloremlorem</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Photo3} alt="Photo1" />
          <Carousel.Caption>
            <h3>Третя фотка</h3>
            <p>lorem loremloremloremloremloremlorem</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
