import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const DatePickerAndMeteo = () => {

    // Force locale FR so there is no miss-match between SSR and CSR
    const locale = 'fr-FR';

    const [date, setDate] = useState(new Date());

    const handleDateChange = (date:Date) => {
        setDate(date)
        console.log(date)
        console.log("API météo refreshed")
    }

    return (
        <Calendar
            value={date}
            onChange={(date:Date) => handleDateChange(date)}//only when value has change  
            locale={locale}    
        />
    );
};

export default DatePickerAndMeteo