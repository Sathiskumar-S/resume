// Navbar content loading events
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    var links = document.getElementsByClassName('pages');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', smoothScroll);
    }
    
    // Smooth scrolling function
    function smoothScroll(event) {
      event.preventDefault();
      var targetSection = document.querySelector(this.getAttribute('href'));
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
});


//Skills Percentage Calculation dynamically => Programming Skills
const skills = [
  { name: 'C++', percent: 50 },
  { name: 'Java', percent: 50 },
  { name: 'Python', percent: 70 },
  { name: 'PHP', percent: 85 },
  { name: 'JavaScript', percent: 60 },
  { name: 'C#', percent: 40 },

];

// Get the chart items container
const chartContainer = document.querySelector('.chart-container');

// Loop through skills data and create chart items dynamically
skills.forEach(skill => {
  // Create chart item elements
  const chartItem = document.createElement('div');
  chartItem.className = 'chart-item';

  const chartLabel = document.createElement('div');
  chartLabel.className = 'chart-label';
  chartLabel.textContent = skill.name;

  const chartBar = document.createElement('div');
  chartBar.className = 'chart-bar';

  const chartProgress = document.createElement('div');
  chartProgress.className = 'chart-progress';
  chartProgress.style.width = `${skill.percent}%`;

  const chartPercent = document.createElement('div');
  chartPercent.className = 'chart-percent';
  chartPercent.textContent = `${skill.percent}%`;
  chartPercent.style.marginTop = '-37px';

  // Append elements to the chart item
  chartBar.appendChild(chartProgress);
  chartItem.appendChild(chartLabel);
  chartItem.appendChild(chartBar);
  chartItem.appendChild(chartPercent);

  // Append chart item to the container
  chartContainer.appendChild(chartItem);
});

  