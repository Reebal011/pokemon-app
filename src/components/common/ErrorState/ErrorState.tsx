import React from "react";
import "./ErrorState.css";
interface ErrorStateProps {
  message: string;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ message }) => {
  return (
    <div className="error-state">
      <p>{message}</p>
    </div>
  );
};
