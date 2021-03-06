/* eslint-disable react/prop-types */
import React from 'react';

const MergeIcon = ({ width = '1em', ...props }) => (
  <svg className="merge-icon" width={width} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
    <path d="M16.21 7.79L13.4 4.97l-1.42 1.41 1.11 1.12H9.82L7.1 3.9a1 1 0 00-.8-.4H.5v2h5.3l2.27 3-2.27 2.99H.5v2h5.8c.31 0 .61-.15.8-.4L9.82 9.5h3.27l-1.11 1.12 1.42 1.41 2.81-2.82c.39-.39.39-1.02 0-1.42z" />
  </svg>
);

export default MergeIcon;