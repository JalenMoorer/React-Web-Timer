import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from './App';

it('renders learn react link', () => {
  render(<App isDefaultTheme />);
  const loading = screen.getByText(/Loading/);
  expect(loading).toBeInTheDocument();
});
 
it('should render App with Countdown', async () => {
   render(<App isDefaultTheme />);

  await waitFor(() => {
    const countdown = screen.queryByText('00:00:00')
    expect(countdown).toBeInTheDocument();
  })
});

it('shoud not update hours past 23', async () => {
  const { getByLabelText } = render(<App isDefaultTheme />);

  await waitFor(() => {
    const hoursInput = getByLabelText("hours");
    fireEvent.change(hoursInput, { 'target': { 'value': '24' } });
    const countdownWithHours = screen.queryByText('00:00:24')
    expect(countdownWithHours).not.toBeInTheDocument()
  });
})

it('should render whole numbers only', async () => {
  const { getByLabelText } = render(<App isDefaultTheme />);

  await waitFor(() => {
    const secondsInput = getByLabelText("seconds");
    fireEvent.change(secondsInput, { 'target': { 'value': '9.5' } });
    const countdownWithSeconds = screen.queryByText('00:00:09')
    expect(countdownWithSeconds).not.toBeInTheDocument()
  });
});

it('should update Countdown timer', async () => {
  const { getByLabelText } = render(<App isDefaultTheme />);

 await waitFor(() => {
    const input = getByLabelText("seconds");
    fireEvent.change(input, { 'target': { 'value': '3' } });
    const countdownWithSeconds = screen.queryByText('00:00:03')
    // console.log(countdownWithSeconds)
    expect(countdownWithSeconds).toBeInTheDocument();
  });

  const startButton = screen.queryByText('Start');
  fireEvent.click(startButton, new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
  }))

  const resetButton = screen.queryByText('Reset');

  await waitFor(() => {
    fireEvent.click(resetButton, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))
    const countdown = screen.queryByText('00:00:00')
    expect(countdown).toBeInTheDocument();
  }, {timeout: 6000})
});