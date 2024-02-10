import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TimeLineContainer from './TimeLineContainer';

const mockStore = configureStore([]);

describe('TimeLineContainer component', () => {
  test('renders without crashing', () => {
    const store = mockStore({
      educations: { data: [], status: 'idle', error: null },
    });
    render(
      <Provider store={store}>
        <TimeLineContainer title="Education Timeline" />
      </Provider>
    );
  });

  test('displays loader while fetching data', async () => {
    const store = mockStore({
      educations: { data: [], status: 'loading', error: null },
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <TimeLineContainer title="Education Timeline" />
      </Provider>
    );
    expect(getByTestId('loader')).toBeInTheDocument();
  });

  test('displays timeline when data is fetched successfully', async () => {
    const mockData = [
      { date: '2022-01-01', title: 'Event 1', text: 'Description for Event 1' },
      { date: '2022-01-02', title: 'Event 2', text: 'Description for Event 2' },
    ];
    const store = mockStore({
      educations: { data: mockData, status: 'succeeded', error: null },
    });
    const { getByText } = render(
      <Provider store={store}>
        <TimeLineContainer title="Education Timeline" />
      </Provider>
    );
    await waitFor(() => expect(getByText('Education Timeline')).toBeInTheDocument());
    expect(getByText('Event 1')).toBeInTheDocument();
    expect(getByText('Description for Event 1')).toBeInTheDocument();
    expect(getByText('Event 2')).toBeInTheDocument();
    expect(getByText('Description for Event 2')).toBeInTheDocument();
  });

  test('displays error message when data fetching fails', async () => {
    const store = mockStore({
      educations: { data: [], status: 'failed', error: 'Network error' },
    });
    const { getByText } = render(
      <Provider store={store}>
        <TimeLineContainer title="Education Timeline" />
      </Provider>
    );
    expect(getByText('Something went wrong; please review your server connection!')).toBeInTheDocument();
  });
});