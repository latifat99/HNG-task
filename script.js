let newDay=document.getElementById("day")
const date =new Date()
const day=date.getDay()
let dayList=[
"Sunday", 
"Monday", 
"Tuesday",
"Wednesday", 
"Thursday" ,
"Friday",
"Saturday"]
 newDay.textContent=dayList[day]
 // display UTC time
 let utcTime=document.getElementById("time")
 function updateTime(){
  const currentTime=date.toLocaleTimeString("en-Uk",{
    hour:"2-digit",
    minute:"2-digit",
    second:"2-digit",
    timeZoneName:"short",
  })
 utcTime.textContent=currentTime
 }
updateTime();
setInterval(updateTime,1000);