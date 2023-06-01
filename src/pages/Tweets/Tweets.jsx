import { useEffect, useState } from "react";

import { getAllUsers } from "services/api";

import BackBtn from "components/BackBtn/BackBtn";
import UsersList from "components/UsersList/UsersList";

export default function Tweets() {
  const [users, setUsers] = useState([]);
  console.log(`🚀 ~ Tweets ~ users:`, users);

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

  if (!users) {
    return;
  }

  return (
    <div>
      <BackBtn />
      <UsersList users={users} />
    </div>
  );
}
