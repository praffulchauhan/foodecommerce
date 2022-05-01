import "./Popular.css";
import { Link } from "react-router-dom";

const Popular = () => {
  return (
    <div className="popularRow">
      <div className="row">
        <div className=" popular col-md-6">
          <img
            src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466__340.jpg"
            alt="popular"
            id="img1"
          />
          <div className="popular-text">
            <h3>CHECK OUR MENU</h3>
            <Link to="/menu" className="checkbtn btn btn-primary">
              Check Now
            </Link>
          </div>
        </div>

        <div className=" popular col-md-6">
          <img
            src="https://www.ning.com/wp-content/uploads/2019/05/create-food-website.jpg"
            alt="popular"
            id="img2"
          />
          <div className="popular-text second">
            <h3>Best Sellers</h3>
            <Link to="/menu" className="checkbtn btn btn-primary">
              Check Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
