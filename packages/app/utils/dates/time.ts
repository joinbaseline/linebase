import moment from 'moment-timezone';

export const getLocaleTimeString = () => {
    const timezone = moment.tz.guess();
    return moment().tz(timezone).toISOString(true);
}

export const getLocaleTime = () => {
    const timezone = moment.tz.guess();
    return moment().tz(timezone);
}

export const date_to_local_hhmm = (utcTime: Date) => {
  const localTime = moment.utc(utcTime).local().format('HH:mm');
  return localTime;
}

export type TimeComponents = {
    hour: number;
    minute: number;
    localTime: string;
}

export const getTimeComponents = (selectedDate: Date): TimeComponents => {
    const newTime = selectedDate;
    const localTime = date_to_local_hhmm(newTime);
    const [ hour, minute ] = localTime.split(":").map((val) => parseInt(val));
    return {
        hour,
        minute,
        localTime
    }
}
