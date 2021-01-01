
var cards = document.getElementsByClassName("cards")

function stopTimer() {
    var date1 = new Date();
    var day = date1.getDate();
    var month = date1.getMonth() + 1;
    var year = date1.getFullYear();
    var stop_date = year +"-"+ month +"-"+ day;

    html = `<div class="timerSubBar">
    <div class="timerSub__tabA">

        <p>Today</p>
        <p>00:00:00</p>
        <i class='fas fa-poll-h'></i> 
    </div>

    <div class="timerSub__tabB">
        <p>Name</p>
        <i class='fas fa-folder' ></i>
        <i class='fas fa-tag'></i>
        <i class='fas fa-dollar-sign' ></i>

        <p> from - ${stop_date} </p>
       

        <i class='fas fa-play' ></i>
        <img src="https://e7.pngegg.com/pngimages/179/938/png-clipart-computer-icons-hamburger-button-dots-kebab-menu-text-rectangle-thumbnail.png"/>

    </div>
</div>`



}