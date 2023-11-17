var navLinks = document.querySelectorAll('#myNav a');

navLinks.forEach(function(link) {
    link.addEventListener('mouseover', function() {
        this.style.color = 'blue';
        this.style.boxShadow = '0px 10px 10px white'; 
    });

    link.addEventListener('mouseout', function() {
        this.style.color = 'grey';
        this.style.boxShadow = 'none'; 
    });
});