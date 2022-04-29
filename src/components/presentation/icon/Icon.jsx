import React from 'react';
import * as Icons from 'react-icons/di';

export const Icon = ({ iconName }) => {
   const icon = React.createElement(Icons[iconName]);
   return <div>{icon}</div>;
};
