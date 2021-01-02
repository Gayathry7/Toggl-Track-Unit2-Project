


var description = document.querySelector('#timer__input')
var projectName  = document.querySelector('#dropdown_msgs')
var tagName = document.querySelector('#dropdown_msgs1')
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
                ${projectName.textContent}
            </div>
            <div>
                ${tagName.textContent}
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
// // <i class='fas fa-folder' ></i>


function clientList(){

    var lsGet = localStorage.getItem("projectList");
    console.log(lsGet)

    if(lsGet === null){
        data = [];
    }else{
        data= JSON.parse(lsGet);
    }

    

    let html = "Projects";
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


    let html = "Available Tags";
    var list = document.getElementById("dropdown_msgs1")

    data.forEach(function(item){
        
        html += `
                  <button>
                  ${item.tag_name} 
                  </button> `;
    });
    list.innerHTML = html;
   }
 
