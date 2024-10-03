// Form validation for Family Account Section
document.getElementById('family-form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const name = document.getElementById('family-name').value;
  const relation = document.getElementById('relation').value;
  const email = document.getElementById('email').value;
  const notification = document.getElementById('notification').value;

  // Simple validation checks
  if (!name || !relation || !email || !notification) {
      alert("All fields are required.");
      return;
  }

  if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
  }

  // Add family member to the list
  const familyMembers = document.getElementById('family-members');
  const li = document.createElement('li');
  li.textContent = `${name} (${relation}) - Notifications: ${notification}`;
  familyMembers.appendChild(li);

  // Clear form fields
  document.getElementById('family-form').reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
// Cycle Prediction based on user input
document.getElementById('cycle-form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const startDate = new Date(document.getElementById('start-date').value);
  const cycleLength = parseInt(document.getElementById('cycle-length').value, 10);

  if (!startDate || !cycleLength) {
      alert("Please enter all cycle information.");
      return;
  }

  const nextCycleDate = new Date(startDate);
  nextCycleDate.setDate(nextCycleDate.getDate() + cycleLength);

  const ovulationDate = new Date(startDate);
  ovulationDate.setDate(ovulationDate.getDate() + Math.floor(cycleLength / 2));

  document.getElementById('next-date').textContent = nextCycleDate.toDateString();
  document.getElementById('ovulation-date').textContent = ovulationDate.toDateString();
});
   data.tips.forEach(tip => {
              const div = document.createElement('div');
             // Fetching health tips using RapidAPI (Example for demonstration)
fetch('https://ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com/exerciseDetails?noqueue=1', {
  method: 'GET',
  headers: {
      'Content-Type: application/json':
      'x-rapidapi-host: ai-workout-planner-exercise-fitness-nutrition-guide.p.rapidapi.com', 'x-rapidapi-key: 0480281d4amshe9793f7d0545620p140906jsnbce71d9aa67b' // Replace with your RapidAPI key
  :
;
.then(response => response.json())
.then(data => {
  const insightsContent = document.querySelector('{"exercise_name":"Dumbbell Squats","lang":"en"}');
  data.tips.forEach(tip => {
      const div = document.createElement('div');
      div.classList.add('insight-item');
      div.innerHTML = `
          <img src="${tip.image}" alt="${tip.title}">
          <h3>${tip.title}</h3>
          <p>${tip.description}</p>
          <a href="${tip.url}" class="learn-more">Read More</a>
      `;
      insightsContent.appendChild(div);
  });
})
.catch(error => console.error('Error fetching tips:', error));

function adjustChatBox() {
  const chatBox = document.querySelector('.chat-box');
  if (window.innerWidth < 768) {
      chatBox.style.width = '100%';
  } else {
      chatBox.style.width = '500px';
  }
}

// Adjust chat box on load and when resizing the window
window.addEventListener('load', adjustChatBox);
window.addEventListener('resize', adjustChatBox)}
