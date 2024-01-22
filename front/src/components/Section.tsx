import React from 'react';

interface SectionProps {
  // You can define any additional props if needed
  children?: any;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <section
      className={`mx-auto mt-20 px-[28px]  py-10  sm:px-0 lg:w-[740px] ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
