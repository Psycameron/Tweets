import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
`;

export const Item = styled.li`
  position: relative;
  z-index: 1;

  width: 380px;
  height: 460px;
  padding: 20px 20px 36px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  width: 76px;
  height: 22px;
  margin-bottom: 136px;
`;

export const Image = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
  z-index: -1;

  width: 308px;
`;

export const Row = styled.div`
  position: absolute;
  top: 214px;
  left: 0;
  z-index: -1;

  width: 380px;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`;

export const AvatarWrapper = styled.div`
  width: 80px;
  height: 80px;

  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border: 8px solid #ebd8ff;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Text = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;

  color: #ebd8ff;
`;

export const Button = styled.button`
  width: 196px;
  height: 50px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #373737;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
`;
