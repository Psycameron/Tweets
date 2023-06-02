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

export default function UsersList({ users }) {
  return (
    <List>
      {users.map(({ id, user, tweets, followers, avatar }) => {
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
                <Text>{tweets} TWEETS</Text>
                <Text>{followers} FOLLOWERS</Text>
              </TextWrapper>
              <Button>FOLLOW</Button>
            </Wrapper>
          </Item>
        );
      })}
    </List>
  );
}
