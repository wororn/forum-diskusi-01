import FlagItem from "./FlagItem";

import PropTypes from "prop-types";

const FlagList = ({ threads = [] }) => {
  return (
    <div className="my-3 d-flex">
      <h4 className="mx-2">Data : </h4>
      {threads.map((thread, index) => (
        <FlagItem key={index} text={thread.category} className="mx-1" />
      ))}
    </div>
  );
};
FlagList.propTypes = {
  threads: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
    })
  ),
};
export default FlagList;
