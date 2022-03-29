import React from 'react';
import * as Icons from 'react-icons/di';

export const Icon = ({ iconName, size }) => {
   const icon = React.createElement(Icons[iconName]);
   return <div style={{ fontSize: size }}>{icon}</div>;
};
