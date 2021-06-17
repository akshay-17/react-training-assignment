import React from "react";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";

function DetailsComponent(props) {
  return (
    <div>
      <PostCard post={props.post} />
      <Link to="/dashboard">Back</Link>
    </div>
  );
}

export default DetailsComponent;
