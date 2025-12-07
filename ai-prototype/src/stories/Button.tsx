//import React from 'react';
import './button.css'; // Iski CSS niche hai

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button = ({ label, onClick, variant = 'primary', disabled = false }: ButtonProps) => {
  return (
    <button 
      className={`storybook-btn ${variant}`} 
      onClick={onClick} 
      disabled={disabled}
    >
      {label}
    </button>
  );
};