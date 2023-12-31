import React from "react";
export default function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return "You liked this!";
  }

  return React.createElement(
    "button",
    {
      onClick: () => setLiked(true),
    },
    "Like"
  );
}
