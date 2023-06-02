import { useEffect, useState } from "react";

import { getAllUsers, updateUser } from "services/api";

import BackBtn from "components/BackBtn/BackBtn";
import UsersList from "components/UsersList/UsersList";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function Tweets() {
  const [users, setUsers] = useState([]);
  const [followingMap, setFollowingMap] = useState(
    () => JSON.parse(window.localStorage.getItem("followingMap")) ?? {}
  );

  const location = useLocation();
  const prevLocation = location.state?.from ?? "/";

  const isFollowing = (id) => {
    return followingMap[id] || false;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

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

  return (
    <div>
      <Link state={{ from: location }} to={prevLocation}>
        <BackBtn />
      </Link>
      <UsersList
        users={users}
        handleFollowClick={handleFollowClick}
        followingMap={followingMap}
      />
    </div>
  );
}
