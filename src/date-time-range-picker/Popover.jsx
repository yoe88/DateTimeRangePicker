import DateTimeRangeWrapper from "./DateTimeRangeWrapper";
import { cloneElement } from "react";
import { createPortal } from "react-dom";
import { Arrow, useLayer } from "react-laag";

const Popover = ({ isOpen, onOutsideClick, offset = 8, arrow = false, children }) => {
  const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
    isOpen,
    onOutsideClick,
    overflowContainer: true,
    auto: true,
    placement: "bottom-center",
    triggerOffset: offset,
  });

  return (
    <>
      {cloneElement(children, { ref: triggerProps.ref })}
      {isOpen &&
        createPortal(
          renderLayer(
            <div {...layerProps}>
              <DateTimeRangeWrapper />
              {arrow && <Arrow {...arrowProps} />}
            </div>,
          ),
          document.body,
        )}
    </>
  );
};

export default Popover;
