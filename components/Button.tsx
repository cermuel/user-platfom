import React from "react";
type button = {
  buttonText: string;
  onClick?: any;
};

const Button = ({ buttonText, onClick }: button) => {
  return (
    <button className="button" onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
