import { useState, useEffect } from "react";
import Popup from "../Rs03-CopyPopupModal/Popup";

const FetchData = () => {
  const [posts, setPosts] = useState(null);
  const [newError, setNewError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setNewError(err);
        setLoading(false);
        setTimeout(() => {
          setNewError(null);
        }, 3000);
      });
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data 😿");
      }
      return await response.json();
    } catch (err) {
      throw new Error("Failed to fetch data 😿");
    }
  };

  return (
    <div>
      <h2>Fetch posts & loading message</h2>
      {loading && <Popup show={true} msg="Loading..." />}
      {newError && <Popup show={true} msg={newError.toString()} />}
      {posts && (
        <p>
          <strong>Post 1: </strong>
          {posts[0].title}
        </p>
      )}
    </div>
  );
};

export default FetchData;
