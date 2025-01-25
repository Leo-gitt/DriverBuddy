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
    <button
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: isHovered
          ? hoverBackgroundColor
          : defaultBackgroundColor,
        color: isHovered ? hoverTextColor : defaultTextColor,
        border: `1px solid ${borderColor}`,
        cursor: "pointer",
        fontSize: "16px",
        transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {showIcon && <i className="fa-solid fa-arrow-right ml-4"></i>}
    </button>
  );
};

export default AppButton;
