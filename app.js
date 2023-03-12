setCurrentTime = () => {
    const d = new Date();
    var hours = d.getHours()
    var minutes = d.getMinutes()
        if(hours<10)
            hours = "0" + minutes
        if(minutes<10)
            minutes = "0" + minutes
    var time = hours + " &nbsp;  " + minutes// + " : " + (d.getSeconds()).toString()
    document.getElementById("time").innerHTML = time;
}

setCurrentDate = () => {
    const d = new Date();
    let date = (d.getDate()).toString()
    document.getElementById("date").innerText = date;
}

setCurrentMonth = () => {
    const d = new Date();
    let month = ""
    switch(d.getMonth()){
        case 0: month = "Jan"
                break 
        case 1: month = "Feb"
                break 
        case 2: month = "Mar"
                break 
        case 3: month = "April"
                break 
        case 4: month = "May"
                break 
        case 5: month = "June"
                break 
        case 6: month = "July"
                break 
        case 7: month = "Aug"
                break 
        case 8: month = "Sept"
                break 
        case 9: month = "Oct"
                break 
        case 10: month = "Nov"
                break 
        case 11: month = "Dec"
                break 
    }
    document.getElementById("month").innerText = month;
}

setCurrentDay = () => {
    const d = new Date();
    let day = ""
    switch(d.getDay()){
        case 0: day = "Sunday"
                break 
        case 1: day = "Monday"
                break 
        case 2: day = "Tuesday"
                break 
        case 3: day = "Wednesday"
                break 
        case 4: day = "Thursday"
                break 
        case 5: day = "Friday"
                break 
        case 6: day = "Saturday"
                break
    }
    document.getElementById("day").innerText = day;
}

setCurrentTime()
setCurrentDate()
setCurrentMonth()
setCurrentDay()

setInterval(function () {setCurrentTime()}, 1000*60)
setInterval(function () {setCurrentDate()}, 1000*60*60*24)
setInterval(function () {
    //document.getElementById("colon").innerHTML = "&nbsp;"
    document.getElementById("colon").style.visibility = (document.getElementById("colon").style.visibility == 'hidden' ? '' : 'hidden')
}, 900)
