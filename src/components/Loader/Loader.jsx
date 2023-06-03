import { ThreeDots } from "react-loader-spinner";
import { Wrapper } from "./Loader.styled";

export default function Loader() {
  return (
    <Wrapper>
      <ThreeDots height="120" width="120" color="#5cd3a8" />;
    </Wrapper>
  );
}
