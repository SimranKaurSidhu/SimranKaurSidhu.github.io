document.addEventListener('DOMContentLoaded', function() {
    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node.js',
        'Git',
        'Responsive Design',
        'Cross-browser Compatibility'
    ];

    const skillsList = document.getElementById('skills-list');

    skills.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
    });
});
