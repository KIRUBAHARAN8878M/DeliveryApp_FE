import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, deleteUser} from "../../actions/userAction";
import Loader from '../Loader'
import Error from '../Error'
import { FiDelete } from "react-icons/fi";


function Userlist() {
  const userState = useSelector((state) => state.getAllUsersReducer);
  const {loading,error,users} = userState
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <>
      <div className="text-light">
        <h1 className="text-center">User List</h1>
        {loading && (<Loader/>)}
        {error && (<Error error = "Error while fetching users"/>)}
        <Table striped bordered hover>
          <thead className="text-light" >
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-light">
          {
            users && users.map(user =>(
              <tr key={user._id}>
                <td>
                  {user._id}
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                <FiDelete 
                      style = {{ color: "red", cursor: "pointer" }}
                      onClick = {()=> {
                        dispatch(deleteUser(user._id))
                      }}/>
                </td>
              </tr>
            ))
          }

          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Userlist;
