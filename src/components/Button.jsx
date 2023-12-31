import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 leading-none px-7 py-4 border text-montserrat text-lg ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : " bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && `w-full`} "}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full h-5 w-5"
        />
      )}
    </button>
  );
};

export default Button;
