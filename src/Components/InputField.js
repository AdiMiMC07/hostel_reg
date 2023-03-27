import React from "react";
import classNames from "classnames";

function InputField(props) {
  const classes = classNames({
    "bg-gray-50": !props.isDisabled,
    "bg-gray-200": props.isDisabled,
    border: true,
    "border-gray-300": true,
    "text-gray-900": true,
    "font-semibold": props.isDisabled,
    "cursor-not-allowed": props.isDisabled,
    "text-md": true,
    "rounded-lg": true,
    "focus:ring-blue-500": true,
    "focus:border-blue-500": true,
    block: true,
    "w-full": true,
    "p-2.5": true,
  });

  return (
    <div>
      <label
        for={props.id}
        className="block mb-2 text-lg font-semibold text-gray-900"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        className={classes}
        value={props.value}
        required
        disabled={props.isDisabled}
        placeholder={props.placeholder}
        accept="application/pdf"
      ></input>
    </div>
  );
}

export default InputField;