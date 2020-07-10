import { createMemoryHistory, createBrowserHistory } from 'history';

export const createUniversalHistory = ({ initialEntries = [] } = {}) => {
  // eslint-disable-next-line no-undef
  if (typeof window !== 'undefined') {
    const history = window.browserHistory || createBrowserHistory();
    if (process.env.NODE_ENV === 'development' && !window.browserHistory) {
      window.browserHistory = history;
    }
    return history;
  }
  return createMemoryHistory({
    initialEntries,
  });
};

export default createUniversalHistory;
