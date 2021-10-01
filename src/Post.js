import React, { useState } from "react";
import axios from "axios";
const Post = () => {
  const [state, setState] = useState({ userId: "", title: "", body: "" });
 
  const ChangeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const SubmitHandler = (e) => {
    e.preventDefault();
 
    axios
      .post("https://jsonplaceholder.typicode.com/posts", state)
      .then((response) => {
        console.log("data posted", response.data);
      })
      .catch((error) => console.log("error"));
alert("user registered")
    setState({ userId: "", title: "", body: "" });

  };

  const { title, body, userId } = state;

  return (
    <div>
      <h1>Fill the form to add a new user</h1>
      <div className="App">
        <form onSubmit={SubmitHandler}>
          <input
            type="number"
            name="userId"
            onChange={ChangeHandler}
            value={userId}
            placeholder="enter user id"
          ></input>
          <br />
          <input
            type="text"
            name="title"
            onChange={ChangeHandler}
            value={title}
            placeholder="title"
          ></input>
          <br />
          <input
            type="text"
            name="body"
            onChange={ChangeHandler}
            value={body}
            placeholder="enter body"
          ></input>
          <br />

          <button>submit</button>
        </form>
      
      </div>
    </div>
  );
};

export default Post;
