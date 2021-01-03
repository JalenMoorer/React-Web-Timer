import styled from 'styled-components';

export const StyledCountdown = styled.div`
  background: ${props => props.theme.global.body_color};
`;

export const Navigation = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
   justify-content: flex-start;
   margin-bottom: 3rem;

   > img {
     padding-left: 25px;
     padding-top: 10px;
     width: ${props => props.theme.header.desktop_logo_width + 'px'};
   }
`;

export const CountDownArea = styled.div`
    margin: 0px auto;
    width: 620px;
    display: flex;
    align-items: center;
    height: inherit;
    color: ${props => props.theme.text.primary_text_color};
    font-size: ${props => props.theme.text.secondary_text_size + 'px'};
    font-family: ${props => props.theme.secondary_font_family.regular};
`;

export const ClockTimer = styled.div`
  font-size: 80px;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

export const TimeInputGroup = styled.div`
  display: flex;
  text-align: center;
  margin: 3rem 0 2rem 0;

  &[data-active="true"] {
    margin: 0;
    visibility: hidden;
  }
`;