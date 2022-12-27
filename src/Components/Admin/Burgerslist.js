import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteBurger, getAllBurgers } from "../../actions/burgerAction";
import Loader from "../../Components/Loader";
import Error from "../../Components/Error";
import { FiEdit, FiDelete } from "react-icons/fi";
import { Link } from "react-router-dom";

function Burgerslist() {
  const dispatch = useDispatch();
  const burgerstate = useSelector((state) => state.getAllBurgerReducer);
  const { loading, burgers, error } = burgerstate;
  console.log(burgers);
  useEffect(() => {
    dispatch(getAllBurgers());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error>Error while fetching burger datas{error}</Error>
      ) : (
        <div className="text-light">
          <Table striped bordered hover className="text-light">
            <thead className="text-light">
              <tr>
                <th>Burger Image</th>
                <th>Burger Name</th>
                <th>Prices</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-light">
              {burgers &&
                burgers.map((burger) => (
                  <tr>
                    <td>
                      <img
                        src={burger.image}
                        alt="logo"
                        width="150px"
                        height="130px"
                      />
                    </td>
                    <td>{burger.name}</td>
                    <td>
                      Small : {burger.prices[0]["small"]}
                      <br />
                      Medium : {burger.prices[0]["medium"]}
                      <br />
                      Large : {burger.prices[0]["large"]}
                      <br />
                    </td>
                    <td>{burger.category}</td>
                    <td>
                      <Link to={`/admin/editburger/${burger._id}`}>
                        <FiEdit style={{ cursor: "pointer" }} />
                      </Link>
                      &nbsp;
                      <FiDelete 
                      style = {{ color: "red", cursor: "pointer" }}
                      onClick = {()=> {dispatch(deleteBurger(burger._id))}}/>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}

export default Burgerslist;
