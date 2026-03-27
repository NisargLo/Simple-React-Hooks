import { useState, useOptimistic, useTransition } from "react";

const updateLikesInDb = async (newCount) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return newCount;
};

function UseOptimisticDemo() {
  const [confirmedLikes, setConfirmedLikes] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    confirmedLikes,
    (currentLikes, optimisticUpdate) => currentLikes + optimisticUpdate
  );

  const handleLike = async () => {
    startTransition(async () => {
      addOptimisticLike(1);
      const updatedCount = await updateLikesInDb(confirmedLikes + 1);
      setConfirmedLikes(updatedCount);
    });
  };

  return (
    <button onClick={handleLike} disabled={isPending}>
      {optimisticLikes} Likes
    </button>
  );
}

export default UseOptimisticDemo;
