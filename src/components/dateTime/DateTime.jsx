import styles from "./dateTime.module.css";

const DateTime = () => {
  const dayOfWeekList = [
    "Sun",
    "Mon",
    "Tues",
    "Wednes",
    "Thurs",
    "Fri",
    "Satur",
  ];
  const monthEnList = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "June",
    "July",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ];
  const date = new Date();
  const dayOfWeek = date.getDay();
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <time
      className={styles.dateTimeContainer}
      dateTime={`${year}-${month}-${day}`}
    >
      <div className={styles.dateTimeYearAndMonth}>
        <span>{year}</span>
        <span>{monthEnList[month]}</span>
      </div>
      <div className={styles.dateTimeDay}>{day}</div>
      <div className={styles.dateTimeDayOfWeek}>
        <span className={styles.dateTimeDayOfWeekBody}>
          {dayOfWeekList[dayOfWeek]}
        </span>
        <span className={styles.dateTimeDayOfWeekSuffix}>day</span>
      </div>
    </time>
  );
};

export default DateTime;
