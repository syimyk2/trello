import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Favorite = () => {
  const [data, setData] = useState([]);
  const location = useLocation()
  console.dir(location);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10 ")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div style={{ padding: "200px" }}>
    
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <Link key={post.id} to={`/favorite/${post.id}`}>
            <li key={post.id}>{post.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
