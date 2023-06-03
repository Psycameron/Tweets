import { useEffect, useState } from "react";

import { getAllUsers, getUsers, updateUser } from "services/api";

import UsersList from "components/UsersList/UsersList";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { BackBtn, LoadMoreBtn } from "./Tweets.styled";

export default function Tweets() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [followingMap, setFollowingMap] = useState(
    () => JSON.parse(window.localStorage.getItem("followingMap")) ?? {}
  );
  const [page, setPage] = useState(1);
  const limit = 4;

  const location = useLocation();
  const prevLocation = location.state?.from ?? "/";

  const isFollowing = (id) => {
    return followingMap[id] || false;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllUsers();
        setAllUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers(page, limit);
        setUsers([...users, ...data]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  useEffect(() => {
    localStorage.setItem("followingMap", JSON.stringify(followingMap));
  }, [followingMap]);

  if (!users) {
    return;
  }

  const handleFollowClick = async (id) => {
    const isCurrentlyFollowing = isFollowing(id);

    if (isCurrentlyFollowing) {
      setFollowingMap((prevMap) => {
        const updatedMap = { ...prevMap };
        delete updatedMap[id];
        return updatedMap;
      });
    } else {
      setFollowingMap((prevMap) => ({ ...prevMap, [id]: true }));
    }

    const updatedUsers = users.map((user) => {
      if (user.id === id) {
        const updatedFollowers = isCurrentlyFollowing
          ? user.followers - 1
          : user.followers + 1;

        return {
          ...user,
          followers: updatedFollowers,
        };
      }
      return user;
    });

    setUsers(updatedUsers);

    await updateUser(updatedUsers.find((user) => user.id === id));
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <Link state={{ from: location }} to={prevLocation}>
        <BackBtn type="button">Back</BackBtn>
      </Link>
      <UsersList
        users={users}
        handleFollowClick={handleFollowClick}
        followingMap={followingMap}
      />
      {allUsers.length > page * limit && (
        <LoadMoreBtn type="button" onClick={handleLoadMore}>
          Load More
        </LoadMoreBtn>
      )}
    </div>
  );
}
