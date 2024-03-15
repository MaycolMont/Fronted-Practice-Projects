const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('.theme-toggle');

    const theme = localStorage.getItem('theme');

    theme && document.body.classList.add(theme)

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.body.classList.toogle('light-mode');
            console.log('botton pointed');
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light-mode')
            } else {
                localStorage.removeItem('theme');
                document.body.removeAttribute('class')
            }
        })
    })
}

export default darkMode;
