"use client";

import React, { useState } from "react";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';

interface RangePickerProps {
    dateRange: any; 
    setDateRange: any; 

}


const RangePicker: React.FC<RangePickerProps> = ({
    dateRange,
    setDateRange,
}) => {
   
  return <div>
    <DateRange  
        editableDateInputs={true}
        // @ts-ignore
        onChange={(item) => setDateRange([item.selection])}
        moveRangeOnFirstSelection={false}
        // @ts-ignore
        ranges={dateRange}
    />
  </div>;
};

export default RangePicker;
