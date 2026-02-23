document.addEventListener('DOMContentLoaded', function() {
    const postit = document.querySelector('.postit');
    const postitContainer = document.querySelector('.postit-container');
    
    if(postit && postitContainer) {
        // Nur beim Klick aufs Bild togglen
        postit.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            postitContainer.classList.toggle('active');
        });
        
        // Container-Klicks ignorieren (damit Links funktionieren)
        postitContainer.addEventListener('click', function(e) {
            // Nur wenn NICHT auf einen Link geklickt wurde
            if (!e.target.classList.contains('contact-link')) {
                e.stopPropagation();
            }
        });
    }
});