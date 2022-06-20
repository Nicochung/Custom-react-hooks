import * as React from 'react';

export const useLoadingWithDelay = (loading: boolean, delay = 500) => {
  const [showLoading, setShowLoading] = React.useState(false);
  const previousLoading = React.useRef(false);
  React.useEffect(() => {
    // Check if it is falling edge
    if (!loading && previousLoading.current) {
      // Set to show loading after delay
      setTimeout(() => setShowLoading(false), delay);
    } else {
      setShowLoading(true);
    }
    previousLoading.current = loading;
  }, [loading, delay]);

  React.useDebugValue(showLoading ? 'Loading' : 'Not Loading');
  return showLoading;
};
