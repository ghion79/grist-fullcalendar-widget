document.addEventListener("DOMContentLoaded", () => {

    const calendar = new FullCalendar.Calendar(
        document.getElementById("calendar"),
        {

            initialView: "dayGridMonth",

            locale: "fr",

            selectable: true,

            editable: true,

            nowIndicator: true,

            headerToolbar: {

                left: "prev,next today",

                center: "title",

                right: "dayGridMonth,timeGridWeek,timeGridDay"

            },

            events: [

                {

                    title: "Bienvenue !",

                    start: new Date()

                }

            ]

        });

    calendar.render();

});
