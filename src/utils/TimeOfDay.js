
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

export function setMessageByTimeOfDay(timeOfDayString) {
        let messageByTimeOfDay = "";
        if (timeOfDayString === "morning") {
            messageByTimeOfDay = "Good Morning"
        } else if (timeOfDayString === "afternoon") {
            messageByTimeOfDay = "Good Afternoon"
        } else if (timeOfDayString === "evening") {
            messageByTimeOfDay = "Good Evening"
        } else {
            messageByTimeOfDay = "";            
        }
        return messageByTimeOfDay;
    }