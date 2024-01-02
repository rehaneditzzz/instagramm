import React, { useState, useEffect, useContext, useReducer } from "react";
import CommentSection from "./CommentSection";
import Notifications from "./Notifications";
import ImageLoader from "./ImageLoader";

// Dummy data
const initialNotifications = [
  { id: 1, text: "New like on your post!" },
  { id: 2, text: "New comment on your photo!" },
];

// Reducer for notifications
const notificationsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return [...state, action.payload];
    default:
      return state;
  }
};

const App = () => {
  const [comments, setComments] = useState([]);
  const [notifications, dispatchNotifications] = useReducer(
    notificationsReducer,
    initialNotifications
  );

  useEffect(() => {
    // Fetch comments from the server (dummy data for illustration)
    // In a real app, you would make an API request to get comments
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      // Simulating API call
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      setComments(data.slice(0, 5)); // Use only a few comments for simplicity
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleNewComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handleNewLike = () => {
    // Dispatch a new like notification
    dispatchNotifications({
      type: "ADD_NOTIFICATION",
      payload: { id: Date.now(), text: "New like on your post!" },
    });
  };

  return (
    <div>
      <h1>Instagram-like App</h1>
      <ImageLoader handleNewLike={handleNewLike} />
      <CommentSection comments={comments} onNewComment={handleNewComment} />
      <Notifications notifications={notifications} />
    </div>
  );
};

export default App;
