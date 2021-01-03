draw([])
var date = new Date
function draw(data){
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'listWeek',
    initialDate: date,
    themeSystem: 'bootstrap',
    headerToolbar: {
        left: 'prev today next',
        center: 'title',
        right: 'listWeek,timeGridWeek,timeGridDay'
    },
    events: data,
    });

    calendar.render();
}

var fetchData = async () => {
    var url = "http://localhost:3000/calendar_events"
    try
    {
        var response = await fetch(url)
        var data = await response.json()

        draw(data)
    }
    catch(error)
    {
        console.log(error)
    }
    
}
window.onload(fetchData())