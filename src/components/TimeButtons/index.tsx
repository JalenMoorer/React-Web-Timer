import React from 'react';
import * as Styles  from './styles';


export const TimeButtons = ({ status, startCountdown, triggerReset } : any) => {
    return (
        <Styles.ButtonGroup>
            <Styles.Button as="button" onClick={startCountdown} disabled={status === 'done'}>
                {status === 'active' ? 'Pause' : 'Start' } 
            </Styles.Button> 
            <Styles.Button as="button" onClick={triggerReset} disabled={status === 'inactive' || status === 'active'}>
                Reset
            </Styles.Button>
        </Styles.ButtonGroup>
    );
}
