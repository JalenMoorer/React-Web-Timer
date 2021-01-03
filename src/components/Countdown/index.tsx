import React from 'react';
import { Input } from '../Input';
import { TimeButtons } from '../TimeButtons';
import * as Styles  from './styles';

// Write your countdown code in this component
export const Countdown = ({ inputObject, time, onChange, startCountdown, triggerReset, status }: any) => {
  return (
    <>
      <Styles.Navigation>
        <img src="koala-logo.png" alt="koala logo" />
      </Styles.Navigation>
      <Styles.CountDownArea>
        <div>
          <Styles.ClockTimer>
            {time}
          </Styles.ClockTimer>
          <Styles.TimeInputGroup data-active={status !== 'inactive'}>
          {
            Object.getOwnPropertyNames(inputObject).map((property) => (
              <Input key={property} value={inputObject[property]} unit={property} onChangeHandler={onChange}>
                {property}
              </Input>
            ))
          }
          </Styles.TimeInputGroup>
          <TimeButtons 
            status={status} 
            triggerReset={triggerReset} 
            startCountdown={startCountdown} 
          />
          </div>
      </Styles.CountDownArea>
    </>
  );
};

