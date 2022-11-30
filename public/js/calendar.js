
var myModal = new bootstrap.Modal(document.getElementById("myModal"))

const frm = document.getElementById('Myform')

document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        timeZone: 'UTC',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        
        locale : 'es',
        editable: true,
        dayMaxEvents: true, // 
        dateClick : function createEvent(info) {
            document.getElementById('dateEvent').value = info.dateStr
            myModal.show();
            //console.log(info);
        },
        events: [
            // event data...
            {
                title: 'Vamos a conocer Tolu',
                start: '2022-11-01',
                end: '2022-11-05',
                description : "ASDAJSKDAJSDKAJDKJ",
                color: '#EE330B',
                textColor: '#ffffff',
                resourceEditable: false // resource not editable for this event
            },
            {
                title: 'Escapada al peñol',
                start: '2022-11-13',
                end: '2022-11-16',
                color: '#EEE40B',
                textColor: '#ffffff',
                resourceEditable: true // resource not editable for this event
            },
            {
                title: 'San Andres Isla',
                start: '2022-11-10',
                end: '2022-11-13',
                color: '#530BEE',
                textColor: '#ffffff',
                resourceEditable: false // resource not editable for this event
            },
            {
                title: 'San Andres Isla',
                start: '2022-11-15',
                end: '2022-11-19',
                color: '#0B6FEE',
                textColor: '#ffffff',
                resourceEditable: false // resource not editable for this event
            },
            {
                title: 'Vamos a conocer Tolu',
                start: '2022-11-07',
                end: '2022-11-11',
                description : "ASDAJSKDAJSDKAJDKJ",
                color: '#EE330B',
                textColor: '#ffffff',
                resourceEditable: false // resource not editable for this event
            },
            {
                title: 'San Andres Isla',
                start: '2022-11-13',
                end: '2022-11-16',
                color: '#530BEE',
                textColor: '#ffffff',
                resourceEditable: false // resource not editable for this event
            },
            {
                title: 'San Andres',
                start: '2022-11-22',
                end: '2022-11-26',
                color: '#0BEE87',
                textColor: '#ffffff',
                resourceEditable: false // resource not editable for this event
            },
            {
                title: 'San Andres Isla',
                start: '2022-11-03',
                end: '2022-11-06',
                color: '#0B6FEE',
                textColor: '#ffffff',
                resourceEditable: false // resource not editable for this event
            }

        ],
        
        

    });

    calendar.render();
    frm.addEventListener('submit' , function (e) {
        e.preventDefault()
        const nameEvent = document.getElementById('eventName').value
        const dateEvent = document.getElementById('dateEvent').value
        const dateEventEnd = document.getElementById('dateEventEnd').value
        const colorEvent = document.getElementById('colorEvent').value

        if (nameEvent == '' || dateEventEnd == '' || colorEvent == '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son requeridos',
                footer: '<a href="">¿Porqué?</a>'
              })
        } else {
            
        }
    })
});

