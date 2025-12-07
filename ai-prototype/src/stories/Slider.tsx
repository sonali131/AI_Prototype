//import React from 'react';

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (val: number) => void;
}

export const Slider = ({ label, value, min, max, onChange }: SliderProps) => {
  return (
    <div style={{ marginBottom: '15px', fontFamily: 'sans-serif' }}>
      <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
        {label}: {value}
      </label>
      <input 
        type="range" 
        min={min} max={max} 
        value={value} 
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: '100%', cursor: 'pointer' }}
      />
    </div>
  );
};