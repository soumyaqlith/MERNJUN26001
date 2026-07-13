import axios from "axios";
import React, { useEffect, useState } from "react";

function GetData() {
  const [posts, setPosts] = useState([]);
  async function getData() {
    try {
      // const response = await fetch(
      //   "https://jsonplaceholder.typicode.com/posts",
      // );
      // const data = await response.json();
      // console.log(data);

      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      setPosts(result.data);
    } catch (error) {
      console.log("Here is the error", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
  <div>
    <ol>
        {
           posts?.map((post)=>(
            <li key={post.id}>{post.title}</li>
           )) 
        }
    </ol>
  </div>
  );
}

export default GetData;
