import { useCallback, useEffect, useRef } from 'react';

const useNavigation = ({ elementSelectors, ids, onIsElementInView }) => {
  const elementsRatio = useRef({});

  const findMostVisibleElement = () => {
    let maxVisibility = 0;
    let mostVisibleElement;

    Object.keys(elementsRatio.current).forEach((key) => {
      const value = elementsRatio.current[key];

      if (value > maxVisibility) {
        maxVisibility = value;
        mostVisibleElement = key;
      }
    });

    return mostVisibleElement;
  };

  const onElementInViewChange = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        const matchedElementId = ids.find((id) => entry.target.className.includes(id));
        elementsRatio.current[matchedElementId] = entry.intersectionRatio;

        if (!entry.isIntersecting) {
          elementsRatio.current[matchedElementId] = 0;
        }

        const mostVisibleElement = findMostVisibleElement();
        if (mostVisibleElement) {
          onIsElementInView(mostVisibleElement);
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(ids), onIsElementInView],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(onElementInViewChange, { threshold: 0.8, delay: 750 });

    elementSelectors.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      for (var i = 0; i < elements.length; ++i) {
        observer.observe(elements[i]);
      }
    });

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(elementSelectors), onElementInViewChange]);
};

export default useNavigation;
