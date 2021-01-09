import React from 'react'
import styled from 'styled-components'

import { BaseColors } from 'data/BaseColors'
import { TransitionContext } from 'App'

const Background = styled.div<{ visible: Boolean }>`
  width: 100%;
  position: absolute;
  flex: 1;
  transition: 300ms;
  opacity: ${(props) => props.visible ? "1" : "0"};

  ${(props) => props.visible ? "" : "transform: translateY(3);"}
`;

const Container = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconBackground = styled.div`
  background: linear-gradient(-45deg, ${BaseColors.darkPurple}, #BD3A9A);
  height: 20em;
  width: 20em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px 0 ${BaseColors.shadow};
`;

const Icon = styled.img`
  border: 0.5em solid white;
  border-radius: 50%;
  height: 90%;
  width: 90%;
`;

const Text = styled.div`
  font-size: 2.3em;
  margin-top: 1em;
  font-weight: 700;
  color: ${BaseColors.darkPurple};
`;

export default function Hello() {
  return (
    <TransitionContext.Consumer>
      {currentViewIndex => (
        <Background visible={currentViewIndex === -1}>
          <Container>
            <IconBackground>
              <Icon src="cotton_circle.png" />
            </IconBackground>
            <Text>Hello World, My name is ko!</Text>
          </Container>
        </Background>
      )}
    </TransitionContext.Consumer>
  )
}