import { useCallback, useEffect, useRef } from 'react';

const useNavigation = ({ selectors, ids, onElementInViewChange }) => {
  const elementsRatio = useRef({});
  const visibleElement = useRef('');

  const findMostVisibleElement = () => {
    let maxVisibility = 0;
    let mostVisibleElement;

    Object.keys(elementsRatio.current).forEach((key) => {
      const value = elementsRatio.current[key];

      if (value > 0 && value >= maxVisibility) {
        maxVisibility = value;
        mostVisibleElement = key;
      }
    });

    return mostVisibleElement;
  };

  const handleElementInViewChange = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        // const matchedElementId = isElementMatch(entry.target);
        const matchedElementId = ids.find((id) => entry.target.className.includes(id));
        elementsRatio.current[matchedElementId] = entry.intersectionRatio;

        if (!entry.isIntersecting) {
          elementsRatio.current[matchedElementId] = 0;
        }

        const mostVisibleElement = findMostVisibleElement();
        if (mostVisibleElement && mostVisibleElement !== visibleElement.current) {
          visibleElement.current = mostVisibleElement;
          onElementInViewChange(mostVisibleElement);
        }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(ids), onElementInViewChange],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleElementInViewChange, { threshold: 0.8, delay: 750 });

    selectors.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      for (var i = 0; i < elements.length; ++i) {
        observer.observe(elements[i]);
      }
    });

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(selectors), onElementInViewChange]);
};

export default useNavigation;
