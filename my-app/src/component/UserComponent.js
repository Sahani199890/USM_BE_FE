import React, { useEffect, useState } from "react";
import "./usercomponent.css";
import { deleteMapping, getMapping, postMapping, putMapping } from "./Config";

export default function UserComponent() {
  const [id, setId] = useState(null);
  const [addBtn, setAddBtn] = useState(false);
  let resetValues = {
    id: "",
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    email: "",
    phoneNumber: "",
  };
  const [addUser, setAddUser] = useState(resetValues);
  const [userByName, setUserByName] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getFunction();
  }, []);

  async function getFunction() {
    try {
      let detail = await getMapping("get-users");
      setUsers(detail);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function searchUser() {
    console.log(userByName);
    if (userByName && userByName !== "") {
      try {
        let detail = await getMapping(`get-one-user/${userByName}`);
        setUsers(detail);
      } catch (error) {
        console.error("Error searching user:", error);
      }
    } else {
      getFunction();
    }
  }

  async function handleAddUser(addUser) {
    setAddUser(resetValues);
    if (addBtn) {
      try {
        let detail = await postMapping({
          url: "create-customer",
          body: addUser,
        });
        if (detail) {
          getFunction();
        }
      } catch (error) {
        console.error("Error adding user:", error);
      }
    } else {
      try {
        let detail = await putMapping({
          url: `update-customer/${id}`,
          body: addUser,
        });
        if (detail) {
          getFunction();
        }
      } catch (error) {
        console.error("Error updating user:", error);
      }
    }
  }

  const resetUserList = () => {
    getFunction();
    setUserByName("");
  };

  const editUser = (userDetails) => {
    setAddBtn(false);
    setAddUser(userDetails);
    setId(userDetails.userId);
  };

  async function deleteUser(userId) {
    try {
      await deleteMapping(`delete-user/${userId}`);
      getFunction();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  return (
    <div>
      <div className="container mt-4">
        <diV>
          <div className="mb-3">
            <h2>User Management</h2>
          </div>

          <div className="mb-3 navbar-user">
            <div>
              <button
                data-bs-toggle="modal"
                data-bs-target="#addCustomer"
                className="btn btn-secondary"
                onClick={() => setAddBtn(true)}
              >
                Add Customer
              </button>
              <div
                class="modal fade"
                id="addCustomer"
                tabindex="-1"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        {addBtn ? "Add Customer" : "Edit User"}
                      </h5>
                      <button
                        type="button"
                        onClick={() => setAddUser(resetValues)}
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body row">
                      <div className="mb-3 col-md-6">
                        <label className="form-label">First Name</label>
                        <input
                          className="form-control"
                          value={addUser.firstName}
                          onChange={(e) =>
                            setAddUser((prevInfo) => ({
                              ...prevInfo,
                              firstName: e.target.value,
                            }))
                          }
                        ></input>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Last Name</label>
                        <input
                          value={addUser.lastName}
                          className="form-control"
                          onChange={(e) =>
                            setAddUser((prevInfo) => ({
                              ...prevInfo,
                              lastName: e.target.value,
                            }))
                          }
                        ></input>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Address</label>
                        <input
                          value={addUser.street}
                          className="form-control"
                          onChange={(e) =>
                            setAddUser((prevInfo) => ({
                              ...prevInfo,
                              street: e.target.value,
                            }))
                          }
                        ></input>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">City</label>
                        <input
                          value={addUser.city}
                          className="form-control"
                          onChange={(e) =>
                            setAddUser((prevInfo) => ({
                              ...prevInfo,
                              city: e.target.value,
                            }))
                          }
                        ></input>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">State</label>
                        <input
                          value={addUser.state}
                          className="form-control"
                          onChange={(e) =>
                            setAddUser((prevInfo) => ({
                              ...prevInfo,
                              state: e.target.value,
                            }))
                          }
                        ></input>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Email</label>
                        <input
                          value={addUser.email}
                          className="form-control"
                          onChange={(e) =>
                            setAddUser((prevInfo) => ({
                              ...prevInfo,
                              email: e.target.value,
                            }))
                          }
                        ></input>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label">Phone Number</label>
                        <input
                          value={addUser.phoneNumber}
                          className="form-control"
                          onChange={(e) =>
                            setAddUser((prevInfo) => ({
                              ...prevInfo,
                              phoneNumber: e.target.value,
                            }))
                          }
                        ></input>
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                        onClick={() => setAddUser(resetValues)}
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={() => handleAddUser(addUser)}
                      >
                        {addBtn ? "Save" : "Update"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control find-by-name"
                  placeholder="Search by Name or Email"
                  value={userByName}
                  onChange={(e) => setUserByName(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={searchUser}
                  >
                    Search
                  </button>
                </div>
                <div className="input-group-append reset-btn">
                  <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={resetUserList}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <table className="table border-dark table-bordered">
                <thead className="thead-dark">
                  <tr>
                    <th>S.No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th colSpan={2} className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    users.map((user, idx) => (
                      <tr key={idx}>
                        <td>{idx + 1}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.street}</td>
                        <td>{user.city}</td>
                        <td>{user.state}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>
                          <button
                            data-bs-toggle="modal"
                            data-bs-target="#addCustomer"
                            className="btn btn-warning mr-2"
                            onClick={() => editUser(user)}
                          >
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteUser(user.userId)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </diV>
      </div>
    </div>
  );
}
