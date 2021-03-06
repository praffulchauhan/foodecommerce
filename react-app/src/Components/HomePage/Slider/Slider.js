import "./Slider.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel fade className="myslider">
      <Carousel.Item interval={900}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=8"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Pizza</h3>
          <p>just add heat [for a take-and-bake pizza]</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={900}>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/spaghetti-alla-puttanesca-italian-pasta-dish-with-tomatoes-black-picture-id1325172440?b=1&k=20&m=1325172440&s=170667a&w=0&h=WS2gPeU01_yzJYsiaHBhOSfrHVKMn-kBxzgsz61a2p8="
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Italian</h3>
          <p>There's nothing more romantic than Italian food.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={900}>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/photos/chilli-paneer-indian-snack-food-picture-id1311491582?b=1&k=20&m=1311491582&s=170667a&w=0&h=TsMv3jRUnX1WQR7xhiouu3AOUYAmgt_fEuch_U3d_wc="
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Chinese</h3>
          <p>Chinese food tries to engage the mind, not just the palate.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    //        <div >
    //         <div id="carouselExampleIndicators" className="carousel slide carousel-fade " data-ride="carousel">
    //         <ol className="carousel-indicators">
    //             <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    //             <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    //             <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    //         </ol>
    //         <div className="carousel-inner">
    //             <div className="carousel-item active">
    //             <img className="d-block w-100" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="First slide" />
    //             </div>
    //             <div className="carousel-item">
    //             <img className="d-block w-100" src="https://media.istockphoto.com/photos/spaghetti-alla-puttanesca-italian-pasta-dish-with-tomatoes-black-picture-id1325172440?b=1&k=20&m=1325172440&s=170667a&w=0&h=WS2gPeU01_yzJYsiaHBhOSfrHVKMn-kBxzgsz61a2p8=" alt="Second slide" />
    //             </div>
    //             <div className="carousel-item">
    //             <img className="d-block w-100" src="https://media.istockphoto.com/photos/chilli-paneer-indian-snack-food-picture-id1311491582?b=1&k=20&m=1311491582&s=170667a&w=0&h=TsMv3jRUnX1WQR7xhiouu3AOUYAmgt_fEuch_U3d_wc=" alt="Third slide" />
    //             </div>
    //         </div>
    //         <Link className="carousel-control-prev" to="#carouselExampleIndicators" role="button" data-slide="prev">
    //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //             <span className="sr-only">Previous</span>
    //         </Link>
    //         <Link className="carousel-control-next" to="#carouselExampleIndicators" role="button" data-slide="next">
    //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //             <span className="sr-only">Next</span>
    //         </Link>
    // </div>
    // </div>
  );
};

export default Slider;
