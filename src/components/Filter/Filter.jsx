import Select from "react-select";
import { Wrapper } from "./Filter.styled";

const options = [
  { value: "show all", label: "show all" },
  { value: "follow", label: "follow" },
  { value: "followings", label: "followings" },
];

export default function Filter({ allUsers, onFilterChange }) {
  const handleFilterChange = (selectedOption) => {
    console.log(`🚀 ~ handleFilterChange ~ selectedOption:`, selectedOption);
    onFilterChange(selectedOption.value);
  };

  // const followingMap = JSON.parse(window.localStorage.getItem("followingMap"));

  // const followingKeys = Object.keys(followingMap);

  if (!allUsers) {
    return;
  }

  // const followingUsers = allUsers.filter((user) =>
  //   followingKeys.includes(user.id)
  // );
  // //   console.log(`🚀 ~ Filter ~ followingUsers:`, followingUsers);

  // const unFollowingUsers = allUsers.filter(
  //   (user) => !followingKeys.includes(user.id)
  // );
  //   console.log(`🚀 ~ Filter ~ unFollowingUsers:`, unFollowingUsers);

  return (
    <Wrapper>
      <Select options={options} onChange={handleFilterChange} />
    </Wrapper>
  );
}
