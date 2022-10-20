/* Your Code Here */
function createEmployeeRecord([firstName, familyName, title, payPerHour]){
        
    return {firstName, familyName, title, payPerHour, timeInEvents : [], timeOutEvents: []}
}


function createEmployeeRecords(records){
let employeeRecords = []
for (let record of records){
    employeeRecords.push(createEmployeeRecord(record))
}
return employeeRecords;
}

function createTimeInEvent(timeStamp){
let [date,hour] = timeStamp.split(' ');
hour = parseInt(hour);
this.timeInEvents.push({
    type : 'TimeIn',
    date,
    hour
    
    })
return this
}

function createTimeOutEvent(timeStamp){
    let [date,hour] = timeStamp.split(' ');
    hour = parseInt(hour);
    this.timeOutEvents.push({
        type : 'TimeOut',
        date,
        hour
        
        })
    return this
    }

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(t => t.date === date)
    const timeOut = this.timeOutEvents.find(t => t.date === date)

    return (timeOut.hour - timeIn.hour)/100;
}

function wagesEarnedOnDate(date){
    const hoursWorked = hoursWorkedOnDate.call(this ,date)

    return Math.round(hoursWorked) * this.payPerHour
}
const payable = function allWagesFor(){
   const wages = this.timeInEvents.map(function(){
        wagesEarnedOnDate.call(this,e.date)
    })
    
}

function findEmployeeByFirstName(srcArray, firstName){
    return srcArray.find(e => e.firstName === firstName)
}

function calculatePayroll(srcArray){
    const payable = srcArray.reduce(function(memo,cRecord){
        return memo + allWagesFor.call(cRecord)
    }, 0)
    return payable
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

