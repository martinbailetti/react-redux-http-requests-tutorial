import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./userSlice";



const UserSettings = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);

  console.log("data", data);
  const submitForm = async (event) => {
    event.preventDefault();
    var data = new FormData(event.target);
    console.log("login", data);

    try {
      const response = await getUser(17);
      console.log("submitForm", response.data.data);

    } catch (err) {
      console.log("try catch", err.response.data);
    }
  };
  useEffect(() => {
    dispatch(getUser(17));
  }, [dispatch]);

  let content;

  if (loading === "pending") {
    content = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  if (loading === "idle") {
    console.log(data);
    content = (
      <div className="d-flex justify-content-center">
    <form onSubmit={submitForm}>
      <input
        type="email"
        required={true}
        className="form-control"
        placeholder="email"
        name="email"
        defaultValue={data.email}
      />
      <input
        type="name"
        required={true}
        className="form-control"
        placeholder="name"
        name="name"
        defaultValue={data.name}
      />
      <button type="submit">Submit</button>
    </form>
      </div>
    );
  }
  if (error !== null) {
    content = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }


  return (
    <div>
    {content}
  </div>
  );
}

export default UserSettings;
