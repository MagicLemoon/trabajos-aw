
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      aspectRatio : 3,
      initialView: 'dayGridMonth',
      eventImageEditable: true,
      events : [
        {
          title  : 'Bazar Underground',
      
          start  : '2024-06-29',
          end    : '2024-06-30'
        },
     
      ]
    });

    calendar.render();
});

