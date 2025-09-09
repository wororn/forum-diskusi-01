import MemoItem from "./MemoItem";

import PropTypes from "prop-types";

const MemoList = ({ threads }) => {
  return (
    <div>
      {threads.map((thread) => (
        <MemoItem key={thread.id} {...thread} />
      ))}
    </div>
  );
};
MemoList.propTypes = {
  threads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      category: PropTypes.string,
      createdAt: PropTypes.string.isRequired,
      upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
      downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
      totalComments: PropTypes.number.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
};

export default MemoList;
