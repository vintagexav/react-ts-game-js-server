import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('With React Testing Library', () => {
  const initialState = { tile: {} };
  const mockStore = configureStore();
  let store;

  it('App shows components', () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByText('Score')).not.toBeNull();
    expect(getByText('Time remaining')).not.toBeNull();
    expect(getByText('Menu')).not.toBeNull();
  });
});
