import styled from 'styled-components';

export const TimeInputArea = styled.div`
  flex: 1;
`;

export const TimeInput = styled.input`
  height: ${props => props.theme.forms.field_height + 'px'};
  display: inline;
  border-radius: 4px;
  background-color: ${props => props.theme.forms.background_color};
  font-size: 22px;
  box-shadow: none;
  border: none;
  color: rgb(85, 85, 85);
  width: 80%;
  box-sizing: border-box;
  text-align: center;
`;

export const Label = styled.label`
  display: inline-block;
  font-weight: bold;
  margin-bottom: 4px;
  margin-top: 12px;
  text-transform: capitalize;
`;