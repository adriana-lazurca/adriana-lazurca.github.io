import { useCallback, useEffect } from 'react';

const useNavigation = ({ elementIds, onIsElementInView }) => {
  const onElementInViewChange = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIsElementInView(entry.target.id);
        }
      });
    },
    [onIsElementInView],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(onElementInViewChange, { threshold: 1 });

    elementIds.forEach((id) => {
      observer.observe(document.getElementById(id));
    });

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(elementIds), onElementInViewChange]);
};

export default useNavigation;
