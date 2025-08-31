import FlagItem from "./FlagItem";

const FlagList = ({ threads = [] }) => {
  return (
    <div className="my-3 d-flex">
      <h4 className="mx-2">Tag : </h4>
      {threads.map((thread, index) => (
        <FlagItem key={index} text={thread.category} className="mx-1" />
      ))}
    </div>
  );
};
export default FlagList;
