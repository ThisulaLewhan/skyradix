"use client";
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  height: 100%;
  
  .card {
    --white: hsl(0, 0%, 100%);
    --black: hsl(240, 15%, 9%);
    --paragraph: hsl(0, 0%, 83%);
    --line: hsl(240, 9%, 17%);
    --primary: ${props => props.$theme === 'green' ? 'hsl(145, 92%, 58%)' : 'hsl(266, 92%, 58%)'};
    --accent1: ${props => props.$theme === 'green' ? 'hsla(150, 93%, 56%, 0.4)' : 'hsla(263, 93%, 56%, 0.3)'};
    --accent2: ${props => props.$theme === 'green' ? 'hsla(125, 58%, 60%, 0.3)' : 'hsla(284, 100%, 76%, 0.3)'};
    --accent3: ${props => props.$theme === 'green' ? 'hsla(160, 100%, 57%, 0.3)' : 'hsla(292, 97%, 34%, 0.3)'};
    --border1: ${props => props.$theme === 'green' ? 'hsl(145, 95%, 60%)' : 'hsl(277, 95%, 60%)'};

    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 3rem;
    width: 100%;
    height: 100%;
    background-color: #0a0a0a;

    border-radius: 1.5rem;
    box-shadow: 0px -16px 24px 0px rgba(255, 255, 255, 0.05) inset;
  }

  .card .card__border {
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    z-index: -10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% + 2px);
    height: calc(100% + 2px);
    background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.05) -50%, rgba(255, 255, 255, 0.01) 100%);
    border-radius: 1.5rem;
  }

  .card .card__border::before {
    content: "";
    pointer-events: none;
    position: absolute;
    z-index: 200;
    top: 50%;
    left: 50%;
    transform-origin: center;
    width: 200%;
    height: 15rem;
    background-image: linear-gradient(
      0deg,
      transparent 0%,
      var(--border1) 40%,
      var(--border1) 60%,
      transparent 100%
    );
    animation: rotate 8s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  .icon-container {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 1.25rem;
    background-color: hsla(240, 15%, 9%, 0.8);
    border: 1px solid rgba(255,255,255,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    margin-bottom: 1rem;
    box-shadow: 0 0 25px 0 var(--accent1);
  }
`;

export const AnimatedGradientCard = ({ title, description, icon, theme = 'purple' }) => {
  return (
    <StyledWrapper $theme={theme}>
      <div className="card">
        <div className="card__border" />
        {icon && (
          <div className="icon-container">
            {icon}
          </div>
        )}
        <div className="relative z-10 my-auto">
          {title && <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>}
          <p className="text-white text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
};
