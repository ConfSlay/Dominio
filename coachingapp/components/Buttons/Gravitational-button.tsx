import React, { useState, useEffect } from 'react';

interface GravitationalButtonProps {}

const GravitationalButton: React.FC<GravitationalButtonProps> = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Add any necessary side effects
  }, []);

  function gravitation(e: React.MouseEvent<HTMLDivElement>): void {
    e.preventDefault();
    const buttonContainer = e.target as HTMLDivElement;
    const button = buttonContainer.querySelector('button');
    if (button) {
        buttonContainer.addEventListener('mousemove', function (ev: MouseEvent): void {
        gravitationAnimation(ev as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>);
      });
    }
  }

  function endOfGravitation(e: React.MouseEvent<HTMLDivElement>): void {
    const buttonContainer = e.target as HTMLDivElement;
    const button = buttonContainer.querySelector('button');
    if (button) {
        // position reset
    }
  }

  function gravitationAnimation(ev: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    // console.log((ev.target as HTMLDivElement).querySelector('button'));
    // console.log(ev.clientX);
    // console.log(ev.clientY);
  }

  return (
    <>
      <div onMouseOver={gravitation} onMouseLeave={endOfGravitation}>
        <button type="button">LE SUPER BOUTON</button>
      </div>
    </>
  );
};

export default GravitationalButton;
