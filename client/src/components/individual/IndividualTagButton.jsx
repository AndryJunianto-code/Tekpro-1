import React from "react";
import { Link } from "react-router-dom";

const IndividualTagButton = ({ tag }) => {
  return (
    <Link to={`/tag/${tag}`} className="link">
      <button className="buttonTag">
        {tag?.length > 15 ? tag.slice(0, 11) + "..." : tag}
      </button>
    </Link>
  );
};

export default IndividualTagButton;
