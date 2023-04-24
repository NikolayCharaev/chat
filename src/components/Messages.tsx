import React from 'react';
import Message from './Message';

type Props = {};

const Messages = (props: Props) => {
  return (
    <div className="p-4 h-calc-minus-160 overflow-scroll">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
