// hooks/useCountdown.ts
import { useEffect, useState } from "react";

export function useCountdown(targetDate: Date) {
  const countDownDate = targetDate.getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const getReturnValues = (countDown: number) => {
    const days = Math.max(Math.floor(countDown / (1000 * 60 * 60 * 24)), 0);
    const hours = Math.max(
      Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      0
    );
    const minutes = Math.max(
      Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)),
      0
    );
    const seconds = Math.max(
      Math.floor((countDown % (1000 * 60)) / 1000),
      0
    );

    return { days, hours, minutes, seconds };
  };

  return getReturnValues(countDown);
}
