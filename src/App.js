import React from "react";
import State, { useState, useEffect } from "react";
import "./App.css";
import friendzone from "./assets/img/friendzone.png";
import "./Post";
import Post from "./Post";
import { db } from "firebase";

function App() {
  const [posts, setPosts] = useState([
    {
      username: "codelad",
      caption: "Strictly Technical",
      imageUrl:
        "https://images.unsplash.com/photo-1589774700092-c16cc8d79851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
    },
    {
      username: "wonderboy",
      caption: "m a developer",
      imageUrl:
        "https://images.unsplash.com/photo-1596128446017-1106bd96ef89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=891&q=80",
    },
    {
      username: "sherelle",
      caption: "i fell in love with tech",
      imageUrl:
        "https://images.unsplash.com/photo-1441015401724-70d16b783f5c?ixlib=rb-1.2.1&dpr=1&auto=format&fit=crop&w=225&q=60",
    },
  ]);

  // UseEffect Run based on specific condition
  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) => {
  //     setPosts(snapshot.docs.map((doc) => doc.data()));
  //   });
  // }, [posts]);

  return (
    <div className="App">
      {/* Header */}
      <div className="app__header">
        <img className="app__headerImg" src={friendzone} alt="" />
      </div>
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
