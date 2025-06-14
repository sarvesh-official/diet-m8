"use client";
import React, { useState, useRef } from "react";

const generateTicks = (count = 21) =>
  Array.from({ length: count }, (_, i) => ({ id: i + "-" + Math.random() }));

const MilestoneSlider = ({ unit, initialValue }: { unit: string; initialValue: number }) => {
  const [value, setValue] = useState(initialValue);
  const [ticks, setTicks] = useState(generateTicks());
  const [offsetY, setOffsetY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const startY = useRef<number | null>(null);
  const isDragging = useRef(false);

  const MIN_VALUE = 0;
  const MAX_VALUE = 200;
  const SCROLL_THRESHOLD = 30;

  const applyScroll = (delta: number) => {
    const newOffset = offsetY + delta;

    if (Math.abs(newOffset) >= SCROLL_THRESHOLD) {
      const direction = newOffset > 0 ? "down" : "up";

      shiftTicks(direction);

      setValue((prev) => {
        if (direction === "up" && prev < MAX_VALUE) return prev + 1;
        if (direction === "down" && prev > MIN_VALUE) return prev - 1;
        return prev;
      });

      setOffsetY(0);
    } else {
      setOffsetY(newOffset);
    }
  };

  const shiftTicks = (direction: "up" | "down") => {
    setTicks((prev) => {
      const updated = [...prev];
      if (direction === "up") {
        updated.pop();
        updated.unshift({ id: Date.now().toString() + "-" + Math.random().toString() });
      } else {
        updated.shift();
        updated.push({ id: Date.now().toString() + "-" + Math.random().toString() });
      }
      return updated;
    });
  };

  const onWheel = (e: React.WheelEvent) => {
    applyScroll(-Math.sign(e.deltaY) * 10);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
    isDragging.current = true;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (startY.current === null || !isDragging.current) return;
    const deltaY = e.touches[0].clientY - startY.current;
    applyScroll(deltaY);
    startY.current = e.touches[0].clientY;
  };

  const onTouchEnd = () => {
    isDragging.current = false;
    startY.current = null;
  };

  const getOpacity = (index: number) => {
    const center = Math.floor(ticks.length / 2);
    const distance = Math.abs(index - center);
    return Math.max(0.2, 1 - distance * 0.1);
  };

  return (
    <div
      ref={containerRef}
      onWheel={onWheel}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="h-[300px] md:h-[500px] w-24 md:w-32 mx-auto overflow-hidden flex flex-col items-center justify-center select-none relative bg-white"
    >
      {/* Ticks Layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-0">
        <div
          className="flex flex-col"
          style={{ transform: `translateY(${offsetY}px)`, transition: isDragging.current ? "none" : "transform 0.15s ease-out" }}
        >
          {ticks.map((tick, index) => (
            <div
              key={tick.id}
              className="w-8 md:w-10 h-0.5 my-[5px] md:my-[6px] rounded"
              style={{
                backgroundColor: "black",
                opacity: getOpacity(index),
              }}
            />
          ))}
        </div>
      </div>

      {/* MASKED CENTER TEXT AREA */}
      <div className="absolute top-1/2 -translate-y-1/2 z-10 bg-white w-full flex flex-col items-center">
        <div className="w-full border-t-2 border-teal-primary my-1 md:my-2" />
        <div className="w-8 md:w-10 h-0.5 bg-black my-1" />
        <div className="flex items-baseline text-teal-500 font-bold text-4xl md:text-6xl my-1 md:my-2 italic">
          {value}
          <span className="text-xs md:text-sm ml-1 font-medium italic">{unit}</span>
        </div>
        <div className="w-8 md:w-10 h-0.5 bg-black my-1" />
        <div className="w-full border-t-2 border-teal-primary my-1 md:my-2" />
      </div>
    </div>
  );
};

export default MilestoneSlider;
