document.addEventListener('DOMContentLoaded', function () {
    const skills = document.querySelectorAll('.skill-level');
    skills.forEach(skill => {
        skill.style.width = '0';
        setTimeout(() => {
            skill.style.width = skill.getAttribute('style').split(':')[1];
        }, 1000);
    });
});