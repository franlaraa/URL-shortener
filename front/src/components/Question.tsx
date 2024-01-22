import React from 'react';

interface QuestionProps {
  // You can define any additional props if needed
  children?: any;
  className?: string;
}

const Question: React.FC<QuestionProps> = ({ children, className }) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

export default Question;
