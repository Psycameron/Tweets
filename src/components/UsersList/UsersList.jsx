import LogoGoIT from "images/svg/Logo_GoIT.svg";
import Background from "images/picture2 1.png";

import {
  Avatar,
  AvatarWrapper,
  Button,
  Image,
  Item,
  List,
  Logo,
  Row,
  Text,
  TextWrapper,
  Wrapper,
} from "./UsersList.styled";

export default function UsersList({ users, handleFollowClick, followingMap }) {
  return (
    <List>
      {users.map(({ id, user, tweets, followers, avatar }) => {
        const isFollowing = followingMap[id] || false;
        return (
          <Item key={id}>
            <Logo src={LogoGoIT} alt="Logo GoIT" />
            <Image src={Background} alt="" />
            <Row />
            <Wrapper>
              <AvatarWrapper>
                <Avatar src={avatar} alt={user} />
              </AvatarWrapper>
              <TextWrapper>
                <Text>{tweets.toLocaleString()} TWEETS</Text>
                <Text>{followers.toLocaleString()} FOLLOWERS</Text>
              </TextWrapper>
              <Button
                onClick={() => handleFollowClick(id)}
                isFollowing={isFollowing}
              >
                {isFollowing ? "Following" : "Follow"}
              </Button>
            </Wrapper>
          </Item>
        );
      })}
    </List>
  );
}
