


// var timerStart = document.getElementById('timer__start')
// var timerStop = document.getElementById('timer__stop')


// var hour = document.getElementById("hours")
// var minute = document.getElementById("minutes")
// var second = document.getElementById("seconds")






// var stop = false


// function startTimer() {

//     var hour = document.getElementById("hours")
//     var minute = document.getElementById("minutes")
//     var second = document.getElementById("seconds")

//     var hours = 0
//     var minutes = 00
//     var seconds = 00
    
//     middle_photo.style.display = "none"
//     timer__arrow.style.display = "none"
//     timerStart.style.display = "none"
//     timerStop.style.display = "block"

//     // var date1 = new Date();
//     // var day1 = date1.getDate();
//     // var month1 = date1.getMonth() + 1;
//     // var year1 = date1.getFullYear();
//     // var start_date = year1 +"-"+ month1 +"-"+ day1;
//     // var milliseconds1 = date1.getMilliseconds();
//     // var minutes1 = date1.getMinutes();
//     // var seconds1 = date1.getSeconds();

//     //console.log(milliseconds1, minutes1, seconds1);

//     var timer = setInterval(function() {

//         seconds = seconds + 01

//         if (seconds >= 60) {
//             minutes = minutes + 1
//             seconds = 00
//         }
//         if (minutes > 59) {
//             hours = hours + 1
//             minutes = 00
//         }

//         if (stop == true) {
//             clearInterval(timer)
            

//             document.getElementById("hours").innerHTML = "0: ";
//             document.getElementById("minutes").innerHTML = "00: ";
//             document.getElementById("seconds").innerHTML = "00";
//             stop = false
           

//             // var date2 = new Date();
//             // var day2 = date2.getDate();
//             // var month2 = date2.getMonth() + 1;
//             // var year2 = date2.getFullYear();
//             // var time2 = date2.getTime();

//             // console.log(time2);

//         }
//         second.innerHTML = seconds
//         minute.innerHTML = minutes + ": "
//         hour.innerHTML = hours + ": "

//     }, 1001);

// }

// 

// 


// function stopTimer() {
//     stop = true;
//     hours = 0
//     minutes = 00
//     seconds = -1
     
 
//     timerStart.style.display = "block"
//     timerStop.style.display = "none"

//     // var date2 = new Date();
//     // var minutes = date2.getMinutes();
//     // var seconds = date2.getSeconds();
//     // var hour = date2.getHours()
//     // var day = date2.getDate();
//     // var month = date2.getMonth() + 1;
//     // var year = date2.getFullYear();
//    // var stop_time = hour +"-"+ minutes +"-"+ seconds;

//     html += `
//     <div class="timerSubBar">

//         <div>
//             desc
//         </div>
//         <div>
//             <i class='fas fa-folder' ></i>
//         </div>
//         <div>
//             <i class='fas fa-tag'></i>
//         </div>
//         <div>
//             <i class='fas fa-dollar-sign' ></i>
//         </div>
//         <div class="timerSub__tabA">
//             4:23 PM - ${stop_time}
//         </div>

//         <div class="timerSub__tabB">    
            
//             00:00:50


//         </div>
//     </div>`

//     hour.innerHTML = "0: ";
//     minute.innerHTML = "00: ";
//     second.innerHTML = "00";

//    cards.innerHTML = html

  

// }



var description = document.querySelector('#timer__input')
var middle_photo = document.querySelector('.timer__middle')
var timer__arrow = document.querySelector('.timer__arrows')

var timerStart = document.querySelector(".timer__start");
var timerStop = document.querySelector(".timer__stop");
var weekview =  document.querySelector(".timer__week");

var start = document.getElementById('timer__start')
var stop = document.getElementById('timer__stop')


var hours = 0;
var minutes = 0;
var seconds = 0;

start.addEventListener("click",function(){ 

    startTimer();
    timerStart.style.display = "none"
    timerStop.style.display = "block"
    middle_photo.style.display = "none"
    timer__arrow.style.display = "none"
    weekview.style.display = "block"


})

stop.addEventListener("click",function(){ 
    hrs1 =  document.querySelector('#hrs').textContent;
    min1 = document.querySelector('#min').textContent;
    sec1 = document.querySelector('#sec').textContent;
    end = hrs1 + min1 +sec1

    clearTimeout(timer);
    timerStart.style.display = "block"
    timerStop.style.display = "none"
    hours =0;      
    mins =0;      
    seconds =0;
    document.querySelector('#hrs').innerHTML = "00:";
    document.querySelector('#min').innerHTML = "00:";
    document.querySelector('#sec').innerHTML = "00";
    loadData();
});

function startTimer(){
    

    timer = setInterval(function(){
        seconds+= 1;
        if (seconds > 59) {
            seconds=0;
            mins += 1
            console.log(seconds);
        }
        if (minutes > 59) {
            minutes = 0;
            hours+= 1 
        }
        if (hours < 10) {
            document.querySelector("#hrs").textContent = "0"+ hours + ": "      
        } else { document.querySelector("#hrs").textContent = hours + ": "}

        if (min < 10) {
            document.querySelector("#min").textContent = "0"+ minutes + ": "
        }else { document.querySelector("#min").textContent = minutes  + ": "}

        if (seconds < 10) {
            document.querySelector("#sec").textContent = "0"+ seconds
        }else { document.querySelector("#sec").textContent = seconds}
 

    },1000)
}

const cards = document.querySelector("#timer__card");
let html = "";

function loadData(){
    var date = new Date()
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var today = year +"-"+ month +"-"+ day;

    html += `
        <div class="timerSubBar">
    
            <div>
                ${description.value}
            </div>
            <div>
                <i class='fas fa-folder' ></i>
            </div>
            <div>
                <i class='fas fa-tag'></i>
            </div>
            <div>
                <i class='fas fa-dollar-sign' ></i>
            </div>
            <div class="timerSub__tabA">
                00:00:00  -  ${end}
            </div>
    
            <div class="timerSub__tabB">          
           ${today}

            </div>
        </div>`

        cards.innerHTML = html
        description.value = ""
    
}


function clientList(){

    var lsGet = localStorage.getItem("projectList");
    console.log(lsGet)

    if(lsGet === null){
        data = [];
    }else{
        data= JSON.parse(lsGet);
    }

    

    let html = "";
    var list = document.getElementById("dropdown_msgs")

    data.forEach(function(item){
        
        html += `
                  <button> 
                  ${item.projectName} 
                  </button> `;
    });
    list.innerHTML = html;    

  }


  function tagList(){

    var lsGetTag = localStorage.getItem("tag");
    console.log(lsGetTag)

    if(lsGetTag === null){
        data = [];
    }else{
        data= JSON.parse(lsGetTag);
    }


    let html = "";
    var list = document.getElementById("dropdown_msgs1")

    data.forEach(function(item){
        
        html += `
                  <button>
                  ${item.tag_name} 
                  </button> `;
    });
    list.innerHTML = html;
   }
 
