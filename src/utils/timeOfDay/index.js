
export function timeOfDayByHour() {
    const time = new Date().getHours();
    let timeOfDay;

        if (time >= 5 && time < 12) {
            timeOfDay = "morning";
        } else if (time >= 12 && time < 20) {
            timeOfDay = "afternoon";
        } else if (time >= 20 || time < 5) {
            timeOfDay = "evening";
        }
        return timeOfDay;
    }