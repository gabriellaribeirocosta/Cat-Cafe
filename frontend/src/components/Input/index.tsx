import './style.css';
import React, {ChangeEvent, useState} from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({ 
  type = 'text', 
  placeholder = '', 
  value, 
  onChange, 
  className = '', 
  ...props
}) => {

  const [isBlurred, setIsBlurred] = useState(false);

  const handleBlur = () => {
    if(value.trim()){
      setIsBlurred(true);
    }
  };

  const handleFocus = () => {
    setIsBlurred(false);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={handleBlur}
      onFocus={handleFocus}
      className={`input ${className} ${isBlurred ? 'blurred' : ''}`}
      {...props}
    />
  );
};

export default Input;