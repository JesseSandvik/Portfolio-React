
export function timeOfDayByTime(time) {
    let timeOfDay;

        if (time < 12) {
            timeOfDay = "morning";
        } else if (time >= 12 && time <= 18) {
            timeOfDay = "afternoon";
        } else if (time > 18 && time <= 24) {
            timeOfDay = "evening";
        }
        return timeOfDay;
    }