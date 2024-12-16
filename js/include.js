document.addEventListener('DOMContentLoaded', function() {
    // Hide content initially
    document.querySelector('.content').style.opacity = '0';
    
    Promise.all([
        // Load navigation
        fetch('components/navigation.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('navbar-placeholder').innerHTML = data;
            }),
        
        // Load sidebar
        fetch('components/sidebar.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('sidebar-placeholder').innerHTML = data;
            })
    ]).then(() => {
        // Show content after everything is loaded
        document.querySelector('.content').style.opacity = '1';
    });
});