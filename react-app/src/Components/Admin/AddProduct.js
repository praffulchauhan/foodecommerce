import Admin from "./Admin";
import "./AddProduct.css";

const AddProduct = () => {
  return (
    <div>
      <Admin />
      <div className="container">
        <div className="add">
          <div className="form-group">
            <label htmlFor="pname">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="pname"
              placeholder="Enter Name of the Product"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pprice">Price</label>
            <input
              type="text"
              className="form-control"
              id="pprice"
              placeholder="Enter Price of the Product"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pdesc">Description</label>
            <textarea
              className="form-control"
              id="pdesc"
              rows="3"
              placeholder="Brief of Product"
            ></textarea>
            <div className="form-group">
              <label htmlFor="pimg">Image</label>
              <input type="file" className="form-control-file" id="pimg" />
            </div>

            <button type="submit" className="btn btn-danger mb-2">
              Add product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
