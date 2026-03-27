import { useState, useOptimistic, startTransition } from "react";

function UseOptimisticDemo() {
  const [likes, setLikes] = useState(0);

  const [optimisticLikes, addLike] = useOptimistic(
    likes,
    (current, value) => current + value
  );

  const handleLike = async () => {
    startTransition(() => {
      addLike(1); // instant UI update
    });

    // simulate API delay
    await new Promise((res) => setTimeout(res, 1000));

    setLikes((prev) => prev + 1); // real update
  };

  return (
    <button onClick={handleLike}>
      {optimisticLikes} Likes
    </button>
  );
}

export default UseOptimisticDemo;