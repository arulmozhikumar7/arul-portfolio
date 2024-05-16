/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Form(props) {
  const { name, value, type, placeholder, className, errorResponse } = props;

  const [hasError, setHasError] = useState(null);

  let pattern = "";
  if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === "tel") pattern = "[0-9]*";

  const onChange = (event) => {
    const target = {
      target: {
        // eslint-disable-next-line object-shorthand
        name: name,
        value: event.target.value,
      },
    };

    if (type === "email") {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }

    if (type === "tel") {
      if (event.target.validity.valid) props.onChange(target);
    } else {
      props.onChange(target);
    }
  };

  if (type === "textarea") {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        className={[
          "p-4 font-light text-lg text-theme-blue rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-theme-purple",
          className,
        ].join(" ")}
        onChange={onChange}
        rows="9"
        required
      />
    );
  }

  if (type === "tel") {
    return (
      <div className="flex flex-col mx-2 mb-6 lg:mx-5 ">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          pattern={pattern}
          value={value}
          className={[
            "p-4 font-light text-lg text-theme-blue rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-theme-purple",
            className,
          ].join(" ")}
          onChange={onChange}
          required
        />
        {hasError && (
          <span className="p-1 text-sm text-white bg-red-500 rounded">
            {hasError}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col mx-2 mb-6 lg:mx-5 ">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={[
          "p-4 font-light text-lg text-theme-blue rounded border border-gray-400 focus:outline-none focus:ring-1 focus:ring-theme-purple",
          className,
        ].join(" ")}
        onChange={onChange}
        required
      />
      {hasError && (
        <span className="p-1 text-sm text-white bg-red-500 rounded">
          {hasError}
        </span>
      )}
    </div>
  );
}
