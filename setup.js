import { createStore } from 'redux';
import { Provider } from 'react-redux';
import render from 'your-testing-lib';
import actions from '../search/actions';
import reducer from '../search/reducer';
import Search from '../search/component';

jest.mock('../search/actions', () => {
  return {
    search: jest.fn(() => {
      // It is common for an action to return a higher order 
      // function that exposes "dispatch", especially when
      // using redux-thunk. To keep the tests synchronous
      // we'll just return an object.
      return {
        // Note: the type string must be entered
        // manually vs importing a constant, due
        // to jest.mock being hoisted
        type: 'SUBMIT_SEARCH',
        payload: { ...somePayload }
      }
    })
  };
})

export default function setup({
  initialState = { ...someInitialState }
} = {}) {
  const testingLibFns = render(
    <Provider store={createStore(reducer, initialState)}>
      <Search />
    </Provider>
  );

  return {
    ...testingLibFns,
    params: { ...someSearchParams },
    submitButton: testingLibFns.getByText('Submit'),
    actions
  }; 
}