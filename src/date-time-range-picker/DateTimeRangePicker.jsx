import Popover from "./Popover";
import { forwardRef, useState } from "react";

const DateTimeRangePicker = forwardRef(({ children, ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  function onClickInside() {
    setIsOpen(true);
  }

  return (
    //react-spring
    <Popover isOpen={isOpen} onOutsideClick={() => setIsOpen(false)} offset={10} arrow={false}>
      <div onClick={onClickInside} {...props}>
        {children}
      </div>
    </Popover>
  );
});

export default DateTimeRangePicker;
