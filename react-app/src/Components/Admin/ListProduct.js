import Admin from "./Admin";
import "./ListProduct.css";

const items = [
  {
    name: "Pizza",
    description: "lorum ipsum",
    price: "sdb",
    image: "sd",
  },
];
const ListProduct = () => {
  return (
    <div>
      <Admin />
      <div class="container cont">
        <div class="row">
          <div class="col-sm">
            {" "}
            <div class="card">
              <img
                class="card-img-top"
                src="https://www.istockphoto.com/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board-gm1309352410-399098986?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fburger&utm_term=burger%3A%3Asearch-explore-top-affiliate-outside-feed-x-v2%3Acontrol"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Burger</h5>
                <p class="card-text">100</p>
                <p class="card-text">This is Burger</p>
                <button className="btn btn-primary ml-3">Edit</button>
                <button className="btn btn-primary ml-5">Delete</button>
              </div>
            </div>
          </div>
          <div class="col-sm">
            {" "}
            <div class="card">
              <img
                class="card-img-top"
                src="https://www.istockphoto.com/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board-gm1309352410-399098986?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fburger&utm_term=burger%3A%3Asearch-explore-top-affiliate-outside-feed-x-v2%3Acontrol"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Burger</h5>
                <p class="card-text">100</p>
                <p class="card-text">This is Burger</p>
                <button className="btn btn-primary ml-3">Edit</button>
                <button className="btn btn-primary ml-5">Delete</button>
              </div>
            </div>
          </div>
          <div class="col-sm">
            {" "}
            <div class="card">
              <img
                class="card-img-top"
                src="https://www.istockphoto.com/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board-gm1309352410-399098986?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fburger&utm_term=burger%3A%3Asearch-explore-top-affiliate-outside-feed-x-v2%3Acontrol"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Burger</h5>
                <p class="card-text">100</p>
                <p class="card-text">This is Burger</p>
                <button className="btn btn-primary ml-3">Edit</button>
                <button className="btn btn-primary ml-5">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
