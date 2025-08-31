import MemoItem from "./MemoItem";

const MemoList = ({ threads }) => {
  return (
    <div>
      {threads.map((thread) => (
        <MemoItem key={thread.id} {...thread} />
      ))}
    </div>
  );
};

export default MemoList;
