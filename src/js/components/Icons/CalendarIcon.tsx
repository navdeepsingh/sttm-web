import React from 'react';
import { STTM_BLUE } from '@/constants';
import { IconProps } from './IconProps';

export const CalendarIcon:React.FC<IconProps> = ({ fill = STTM_BLUE, width, height }) => {
  return (
    <svg style={{ fill, width, height }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36.449 36.448">
      <path d="M12.858 14.626h4.596v4.089h-4.596zM18.996 14.626h4.595v4.089h-4.595zM25.128 14.626h4.596v4.089h-4.596zM6.724 20.084h4.595v4.086H6.724zM12.858 20.084h4.596v4.086h-4.596zM18.996 20.084h4.595v4.086h-4.595zM25.128 20.084h4.596v4.086h-4.596zM6.724 25.54h4.595v4.086H6.724zM12.858 25.54h4.596v4.086h-4.596zM18.996 25.54h4.595v4.086h-4.595zM25.128 25.54h4.596v4.086h-4.596z" />
      <path d="M31.974 32.198c0 .965-.785 1.75-1.75 1.75h-24c-.965 0-1.75-.785-1.75-1.75V12.099h-2.5v20.099c0 2.343 1.907 4.25 4.25 4.25h24c2.344 0 4.25-1.907 4.25-4.25V12.099h-2.5v20.099zM30.224 3.948h-1.098V2.75c0-1.517-1.197-2.75-2.67-2.75-1.474 0-2.67 1.233-2.67 2.75v1.197h-2.74V2.75c0-1.517-1.197-2.75-2.67-2.75-1.473 0-2.67 1.233-2.67 2.75v1.197h-2.74V2.75c0-1.517-1.197-2.75-2.67-2.75-1.473 0-2.67 1.233-2.67 2.75v1.197H6.224c-2.343 0-4.25 1.907-4.25 4.25v2h32.5v-2c0-2.342-1.906-4.249-4.25-4.249zM11.466 7.646c0 .689-.525 1.25-1.17 1.25s-1.17-.561-1.17-1.25V2.75c0-.689.525-1.25 1.17-1.25s1.17.561 1.17 1.25v4.896zm8.08 0c0 .689-.525 1.25-1.17 1.25s-1.17-.561-1.17-1.25V2.75c0-.689.525-1.25 1.17-1.25s1.17.561 1.17 1.25v4.896zm8.08 0c0 .689-.525 1.25-1.17 1.25-.646 0-1.17-.561-1.17-1.25V2.75c0-.689.524-1.25 1.17-1.25.645 0 1.17.561 1.17 1.25v4.896z" />
    </svg>
  )
}

export default CalendarIcon;