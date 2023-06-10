import { formatDate } from '@/utils/commonUtil';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Value } from 'react-calendar/dist/cjs/shared/types';

interface AtomCalendarProps {
  getDateFunc: (date: string) => void;
}

const AtomCalendar = ({ getDateFunc }: AtomCalendarProps) => {
  const [date, setDate] = useState<Date>(new Date());
  const handleDateChange = (targetDate: Value) => {
    if (targetDate instanceof Date) {
      setDate(targetDate);
      getDateFunc(formatDate(targetDate));
    }
  };

  return <Calendar value={date} onClickDay={handleDateChange} />;
};

export default AtomCalendar;
