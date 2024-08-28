import React from 'react';

interface Props {
  message: string;
}

const SomeComponent: React.FC<Props> = ({ message }) => {
  return <div>{message}</div>;
};

export default SomeComponent;
