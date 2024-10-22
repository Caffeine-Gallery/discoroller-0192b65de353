import { backend } from 'declarations/backend';

async function loadSchedules() {
  try {
    const schedules = await backend.getSchedules();
    displaySchedules(schedules);
  } catch (error) {
    console.error("Error fetching schedules:", error);
  }
}

function displaySchedules(schedules) {
  const container = document.getElementById('schedule-container');
  container.innerHTML = '';

  if (schedules.length === 0) {
    container.innerHTML = '<p>No schedules available at the moment. Check back soon!</p>';
    return;
  }

  const table = document.createElement('table');
  table.innerHTML = `
    <tr>
      <th>Day</th>
      <th>Start Time</th>
      <th>End Time</th>
      <th>Description</th>
    </tr>
  `;

  schedules.forEach(schedule => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${schedule.day}</td>
      <td>${formatTime(schedule.startTime)}</td>
      <td>${formatTime(schedule.endTime)}</td>
      <td>${schedule.description}</td>
    `;
    table.appendChild(row);
  });

  container.appendChild(table);
}

function formatTime(timestamp) {
  const date = new Date(Number(timestamp));
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

document.addEventListener('DOMContentLoaded', loadSchedules);