import React, { useState } from "react";

interface ButtonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  onClick?: () => void;
  showIcon?: boolean;
  children: React.ReactNode;
}

const AppButton: React.FC<ButtonProps> = ({
  width = "auto",
  height = "auto",
  showIcon = false,
  borderRadius = "4px",
  onClick,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultBackgroundColor = "#FA6400";
  const defaultTextColor = "#fff";
  const hoverBackgroundColor = "#fff";
  const hoverTextColor = "#FA6400";
  const borderColor = "#FA6400";

  return (
    <div
      style={{
        display: "flex",       // Centers the button horizontally
        justifyContent: "center",  // Centers horizontally
        alignItems: "center",      // Centers vertically if necessary
        width: "100%",            // Make sure it takes up full width
      }}
    >
      <button
        style={{
          width: width,
          height: height,
          borderRadius: borderRadius,
          backgroundColor: isHovered
            ? hoverBackgroundColor
            : defaultBackgroundColor,
          color: isHovered ? hoverTextColor : defaultTextColor,
          border: `1px solid ${borderColor}`,
          cursor: "pointer",
          fontSize: "16px",
          transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 1rem", // Padding for better mobile interaction
        }}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
        {showIcon && <i className="fa-solid fa-arrow-down ml-3"></i>}
      </button>
    </div>
  );
};

export default AppButton;
