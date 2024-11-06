document.getElementById('toggleMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    const icon = document.getElementById('icon');
    const logo = document.getElementById('logo');

    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        logo.src = 'images/newsbranco.png';  // Logo para o modo escuro
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        logo.src = 'images/newspreto.png';  // Logo para o modo claro
    }
});
