import { forwardRef, useId, useState } from "react";
import { createPortal } from "react-dom";
import { useLayer } from "react-laag";

const Select = forwardRef((props, ref) => {
  function twoDigitNumber(num) {
    return num < 10 ? "0" + num : num;
  }

  return (
    //h-56
    //grow basis-0 overflow-hidden
    <div className="flex w-36 w-[114px] flex-col divide-y rounded border bg-white shadow-lg" {...props} ref={ref}>
      <div className="flex h-56 divide-x">
        <ul data-type="hour" className="ant-picker-time-panel-column my-1 box-border w-full overflow-hidden p-0 text-start hover:overflow-auto">
          {[...Array(24)].map((_, i) => (
            <li key={i} className="mx-1" data-value={i}>
              <div className="pl-[14px]">{twoDigitNumber(i)}</div>
            </li>
          ))}
        </ul>
        <ul datatype="minute" className="ant-picker-time-panel-column my-1 box-border w-full overflow-hidden text-start hover:overflow-auto">
          {[...Array(60)].map((_, i) => (
            <li key={i} className="mx-1" data-value={i}>
              <div className="pl-[14px]">{twoDigitNumber(i)}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex h-8 justify-end gap-x-2 px-3 text-sm">
        <button className="text-gray-600 hover:font-bold">취소</button>
        <button className="text-blue-500 hover:font-bold">확인</button>
      </div>
    </div>
  );
});

function TimePicker({}) {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

  function onInsideClick() {
    setIsOpen(true);
  }

  function onOutsideClick() {
    setIsOpen(false);
  }

  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen,
    onOutsideClick: onOutsideClick,
    onParentClose: onOutsideClick,
    auto: true,
    placement: "bottom-center",
    triggerOffset: 3,
  });

  const placeholder = "시작시간"; //배열[0, 1] 꺼내기 이것도 context

  return (
    <>
      <div key={id} className="relative flex w-full items-center text-gray-600" ref={triggerProps.ref} onClick={onInsideClick}>
        <input
          type="text"
          autoComplete="off"
          placeholder={placeholder}
          className="size-full rounded border border-gray-200 px-4 text-sm outline-none focus:border-blue-500"
          maxLength={8}
          defaultValue="22:05"
        />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="pointer-events-none absolute right-1 size-5 rotate-180">
          <path fillRule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clipRule="evenodd" />
        </svg>
      </div>
      {isOpen && createPortal(renderLayer(<Select {...layerProps} />), document.body)}
    </>
  );
}

export default TimePicker;
