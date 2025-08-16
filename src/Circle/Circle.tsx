import { forwardRef } from "react";
import "./Circle.css";

interface Props {
  color: "red" | "orange" | "green";
  active: boolean;
  onActivate: () => void;
}

export const Circle = forwardRef<HTMLDivElement, Props>(
  ({ color, active, onActivate }, ref) => {
    const base = `circle circle-${color}`;
    const activeClass = active ? ` circle-${color}--active` : "";

    return (
      <div
        ref={ref}
        tabIndex={0}
        role="button"
        aria-pressed={active}
        className={base + activeClass}
        onClick={onActivate}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onActivate();
          }
        }}
      />
    );
  }
);
