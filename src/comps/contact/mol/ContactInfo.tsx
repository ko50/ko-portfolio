import React from 'react';
import styled from 'styled-components';
import { ContactInfoData } from 'data/type/ContactData';
import { StrongText } from '../../common/Formatter';
import { ContactButton } from '../atom/ContactButton';

const Root = styled.div`
  display: inline-block;

  @media screen and (max-width: 50em) {
    margin: 0px 10.5m;
  }
`;

const ServiceName = styled(StrongText)`
  font-size: 0.9em;
  margin-top: 0.3em;
`;

export function ContactInfo(props: ContactInfoData) {
  return (
    <Root>
      <ContactButton
        serviceName={props.serviceName}
        imageColor={props.imageColor}
        url={props.url}
        icon={props.icon}
      />
      <ServiceName>{props.serviceName}</ServiceName>
    </Root>
  );
}
