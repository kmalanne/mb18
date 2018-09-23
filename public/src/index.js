document.addEventListener("DOMContentLoaded", () => updateTimeline(), false);

const events = [
  { id: "a", time: "2018-09-28T09:30:00" },
  { id: "b", time: "2018-09-28T10:40:00" },
  { id: "c", time: "2018-09-28T11:30:00" },
  { id: "d", time: "2018-09-28T12:00:00" },
  { id: "e", time: "2018-09-28T14:00:00" },
  { id: "f", time: "2018-09-28T18:00:00" },
  { id: "g", time: "2018-09-29T11:00:00" },
  { id: "h", time: "2018-09-29T18:00:00" },
  { id: "i", time: "2018-09-30T11:30:00" },
  { id: "j", time: "2018-09-30T14:20:00" },
  { id: "k", time: "2018-09-30T15:30:00" }
];

function updateTimeline() {
  const now = Date.now();

  events.forEach(e => {
    if (new Date(e.time) < now) {
      const element = document.getElementById(e.id);
      element.classList.add("timeline-badge-finished");
    }
  });
}
