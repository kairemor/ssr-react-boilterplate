import { REQUEST_APPS, RECEIVE_APPS } from './actions';

function apps(
  state = {
    isFetching: false,
    apps: [],
  },
  action
) {
  switch (action.type) {
    case REQUEST_APPS:
      return { ...state, isFetching: true };
    case RECEIVE_APPS:
      return { ...state, isFetching: false, apps: action.apps };
    default:
      return state;
  }
}

export default apps;
