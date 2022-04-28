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
      <div className="list">
        <table className="table ">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Image</th>
              <th>Price</th>
              <th className="action">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.description}</td>
                <td>{user.price}</td>
                <td>{user.image}</td>
                <td>
                  <button className="btn btn-success mr-4">Edit</button>
                  <button className="btn btn-success">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListProduct;
