import fetchUserData from './fetchUserData'
import minutesPerWeek from '../../minutesPerWeek'


export default async function weightCreator(userId) {
    let dates = []
    // tracks date by number representing YYYY/MM/DD
    let daysOfWeek = []
    // days of the week 0 (Monday) - 6 (Sunday)
    let weightDataArray = []
    // minutes corresponding to each date
    let finalWeight = []
    let finalDates = []

    let creationDate = Object.assign({}, await fetchUserData('profiles', 'user_created_at', userId))
    let dateData = Object.assign({}, await fetchUserData('lifestyle_coach_log', 'created_at', userId))
    let weightData = Object.assign({}, await fetchUserData('lifestyle_coach_log', 'current_weight', userId))
    
    let createDate = new Date(creationDate[0].user_created_at)
    let createDay = createDate.getDay()
    createDate = createDate.getTime() / (1000 * 3600 * 24)

    let startOfCreation = Math.trunc(createDate - createDay);

    Object.entries(weightData).map((row) => {
        const weight = row[1].current_weight;
        weightDataArray.push(weight);
    })
    // mapping minutes to the array
    if(weightDataArray[0]){
        weightDataArray.unshift(weightDataArray[0]);
    }
    else{
        weightDataArray.unshift(null);
    }
    

    Object.entries(dateData).map((row) => {
        const date = row[1].created_at;
        let date1 = new Date(date);
        dates.push(date1.getTime() / (1000 * 3600 * 24));
        daysOfWeek.push(date1.getDay());
    })
    dates.unshift(startOfCreation);
    daysOfWeek.unshift(0);


    let step = 0;
    // first array element
    if(dates[step]){
        while (step < dates.length) {
            const dateSet = [dates[step]];
            // gets first date entry of the new loop
            const weightSet = [weightDataArray[step]];
            // gets first minute entry of the new loop
            const daysOfWeekSet = [daysOfWeek[step]]

            for(step; step < dates.length - 1; step++){
                if(daysOfWeek[step + 1] >= daysOfWeek[step]){
                    // If the day of the week is the same day or a further day in the week
                    // We want to be ordering minutes in graph by week so this ensures that
                    if((dates[step + 1] - dates[step]) < 7){
                        // Prevents the next date from being a later day of the week
                        // But more than a week in the future
                        dateSet.push(dates[step + 1])
                        weightSet.push(weightDataArray[step + 1])
                        daysOfWeekSet.push(daysOfWeek[step + 1])
                    }
                    else {
                        // If next day of week is Thursday and current day is Wednesday
                        // But difference is more than one week apart
                        break;
                    }
                }
                else {
                    // If the next day of the week is earlier than current date entry
                    break;
                }
            }
            if(((dates[step + 1] - dates[step]) < 7) || (!dates[step + 1])){
                // If the next date is simply on the next week
                // We can add the current number of minutes for this week
                // And deal with the next week in another iteration of the while loop
                let weightAvg = 0;
                weightSet.map((row) => {
                    weightAvg += row;
                    // Getting total minutes for that week
                })
                weightAvg /= weightSet.length
                finalWeight.push(weightAvg);

                // let weekStart = dateSet[0] - daysOfWeekSet[0]
                // weekStart / 365 truncated = years after 1970
                // weekStart - (365 * years after 1970) = days after this year's beginning

                if(!dates[step + 1]) {
                    let now = new Date();

                    let todayDay = now.getDay();

                    let todayDate = now.getTime() / (1000 * 3600 * 24);

                    let firstDayOfWeek = Math.trunc(todayDate - todayDay);

                    const timeDifference = firstDayOfWeek - dates[step];
                    // How many days are between the next date and the beginning of next week
                    let weeksMissed = Math.trunc(timeDifference / 7)
                    // How many weeks (truncated) are between the next date and the beginning of next week
                    for(weeksMissed; weeksMissed > 0; weeksMissed--) {
                        // For each week missed, 0 minutes are added to the minutes array as a value for those weeks
                        finalWeight.push(weightAvg);
                    }
                    break;
                }
                else{
                    step++;
                    continue;
                }

                // finalDates.push(weekStart.toString)
                // FIX THE DATES CORRESPONDING TO EACH WEEK

            }
            else {
                // If the time difference between the current date processed and the next date
                // Is more than 1 week, we need to check how many weeks are between these two dates
                // And give '0' minutes to each week in between these two data points accordingly

                let weightAvg = 0;
                weightSet.map((row) => {
                    weightAvg += row;
                    // Getting total minutes for that week
                })
                weightAvg = weightAvg / weightSet.length
                finalWeight.push(weightAvg);

                const dayDifference = 7 - daysOfWeek[step];
                // How many days left until the beginning of the next week
                const weekStart = dates[step] + dayDifference;
                // Number representation of date at the beginning of next week
                const timeDifference = dates[step + 1] - weekStart;
                // How many days are between the next date and the beginning of next week
                let weeksMissed = Math.trunc(timeDifference / 7)
                // How many weeks (truncated) are between the next date and the beginning of next week

                for(weeksMissed; weeksMissed > 0; weeksMissed--) {
                    // For each week missed, 0 minutes are added to the minutes array as a value for those weeks
                    finalWeight.push(weightAvg);
                }
                step++
                continue;
            }
        }
    }
    else {
        finalWeight.push(0)
    }
        
    for (let num = 1; num <= finalWeight.length; num++){
        finalDates.push(`Week ${num}`)
    }

    const weightGraph = [finalWeight, finalDates]

    return weightGraph;
}