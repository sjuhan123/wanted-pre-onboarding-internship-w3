import React, { useEffect, useRef, useState } from 'react';

export default function useModal(inputValue: string) {
  const [isOn, setIsOn] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputValue.length === 0) {
      setIsOn(false);
    } else {
      setIsOn(true);
    }
  }, [inputValue]);

  useEffect(() => {
    function handleClickOutside(event: Event) {
      const target = event.target as HTMLElement;
      if (targetRef.current && !targetRef.current.contains(target)) {
        setIsOn(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return { isOn, targetRef };
}
