import styled from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 15px;
  margin: 0px auto;
  width: 50%;
`;

export const Button = styled.button`
  margin-right: 25px;
  border-radius: ${props => props.theme.buttons.knockout_button_border_radius + 'px'};
  background-color: ${props => props.theme.buttons.knockout_button_background_color};
  font-size: 16px;
  padding: 10px;
  box-shadow: none;
  color: ${props => props.theme.buttons.knockout_button_text_color};
  width: 50%;
  box-sizing: border-box;
  cursor: pointer;
  border-width: 1px;
  border-color: ${props => props.theme.buttons.knockout_button_border_color};
  border-style: groove;
  
  &[disabled] {
    color: #0101014D;
    border-color: #0101014D;
    cursor: not-allowed;
  }
`;