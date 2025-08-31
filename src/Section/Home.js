import SearchForm from "../Component/SearchForm";
import { useEffect, useMemo } from "react";
import MemoList from "../Component/MemoList.js";
import FlagList from "../Component/FlagList.js";
import { useDispatch, useSelector } from "react-redux";
import { asyncPopulateUsersThreadsLeaderboards } from "../Action/Shared/action";

function Home() {
  const dispatch = useDispatch();
  const { threads = [], users = [] } = useSelector((state) => state);

  useEffect(() => {
    dispatch(asyncPopulateUsersThreadsLeaderboards());
  }, [dispatch]);

  // Memoize threadList to avoid unnecessary recalculations
  const memoList = useMemo(
    () =>
      threads.map((thread) => ({
        ...thread,
        user: users.find((user) => user.id === thread.ownerId),
      })),
    [threads, users]
  );

  return (
    <section className="Home-Panel">
      <h1>Let's discuss our problem, topic, etc</h1>
      <p className="home-panel__title">
        Engage in insightful conversations, connect with diverse voices, and
        foster meaningful exchanges on every topic.
      </p>
      <div className="home-page__content">
        <SearchForm />
        <FlagList threads={threads} />
        <MemoList threads={memoList} />
      </div>
    </section>
  );
}

export default Home;
