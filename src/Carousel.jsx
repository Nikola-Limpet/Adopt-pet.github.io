import { Component } from 'react';

class Carousel extends Component {
  state = {
    active: 0
  }
  props = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg']
  };


  // compunentDidMount() {
  //   this.setState({
  //     images: this.props.images,
  //   });
  // }

  handleIndexClick = (event) => {
    this.setState({
      // the + turns the string into a number
      active: +event.target.dataset.index
    });
  };

  render() {
    // this is a destructuring assignment
    // about the same as const active = this.state.active;
    const { active } = this.state;
    const { images } = this.props;
    
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    )
  }
}


export default Carousel;