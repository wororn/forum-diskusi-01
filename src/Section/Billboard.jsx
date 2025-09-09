import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPopulateUsersThreadsLeaderboards } from "../Action/Shared/action";
import BillboardUser from "../Component/BillboardUser";

const Billboard = () => {
  const billboards = useSelector((state) => state.leaderboards || []);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboards = async () => {
      setLoading(true);
      dispatch(asyncPopulateUsersThreadsLeaderboards());
      setLoading(false);
    };
    fetchLeaderboards();
  }, [dispatch]);

  return (
    <section
      className="container my-5"
      aria-label="Billboard Section"
      aria-busy={loading}
    >
      <h1 className="text-center fw-bold" tabIndex={0}>
        User Billboard
      </h1>
      <p
        className="text-center text-xl text-slate-200 font-medium"
        tabIndex={0}
      >
        Most Active Users
      </p>

      {loading ? (
        <div className="text-center my-4" aria-live="polite">
          Loading...
        </div>
      ) : billboards.length === 0 ? (
        <div className="text-center my-4" aria-live="polite">
          No users found for the billboard.
        </div>
      ) : (
        billboards.map((leaderboard, i) => (
          <BillboardUser
            key={leaderboard.user.id}
            {...leaderboard}
            num={i + 1}
          />
        ))
      )}
    </section>
  );
};

export default Billboard;
