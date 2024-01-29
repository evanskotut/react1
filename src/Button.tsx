import React from "react";
interface props {
  children: string;
  onclick: () => void;
}

const Button = () => {
  return (
    <button className="btn btn-primary" onClick={onclick}>
      {children}Button
    </button>
  );
};

export default Button;
