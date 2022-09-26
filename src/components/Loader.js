import React from "react";
import Spinner from "react-spinkit";
import styled from "styled-components";

function Loader() {
  return (
    <AppLoading>
      <AppLoadingContent>
        <img
          src="https://wiki.nottinghack.org.uk/images/thumb/c/cf/Slack_Mark.svg/600px-Slack_Mark.svg.png"
          alt=""
        />
        <Spinner name="cube-grid" color="purple" fadeIn="none" />
      </AppLoadingContent>
    </AppLoading>
  );
}

export default Loader;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
