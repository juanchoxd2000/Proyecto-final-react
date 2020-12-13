import React from 'react'
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function DatePicker(props) {

    const { name, label, value, onChange } = props


    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })
    function disableWeekends(date) {
        return date.getDay() === 0;
      }
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker disablePast shouldDisableDate={disableWeekends} variant="dialog" inputVariant="outlined"
                label={label}
                format="yyyy/MM/dd HH:mm"
                name={name}
                value={value}
                onChange={date =>onChange(convertToDefEventPara(name,date))}

            />
        </MuiPickersUtilsProvider>
    )
}
