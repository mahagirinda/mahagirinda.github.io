var isDarkMode;
initTheme();

$('#darkSwitch').click(function () {
    if (isDarkMode == false) {
        isDarkMode = true;
        document.body.setAttribute("data-theme", "dark");
        localStorage.setItem("darkSwitch", "dark");
        swithIcon();
    } else {
        isDarkMode = false;
        document.body.setAttribute("data-theme", "light");
        localStorage.setItem("darkSwitch", "light");
        swithIcon();
    }
});

function swithIcon() {
    var imgDark = '../images/background-dark.jpg';
    var imgLight = '../images/background.jpg';
    if (isDarkMode) {
        $('#darkmoodIcon').addClass('icon-light-bulb');
        $('#darkmoodIcon').removeClass('icon-moon');
    } else {
        $('#darkmoodIcon').addClass('icon-moon');
        $('#darkmoodIcon').removeClass('icon-light-bulb');
    }
}		

function initTheme() {
    if (localStorage.getItem("darkSwitch") !== null) {
        const isDarkModeBefore = localStorage.getItem("darkSwitch") === "dark" ;
        if (isDarkModeBefore) {
            isDarkMode = true;
            document.body.setAttribute("data-theme", "dark");
            swithIcon();
        } else {
            isDarkMode = false;
            document.body.setAttribute("data-theme", "light");
            swithIcon();
        }
    } else {
        const isSystemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (isSystemDarkMode) {
            isDarkMode = true;
            document.body.setAttribute("data-theme", "dark");
            swithIcon();
        } else {
            isDarkMode = false;
            document.body.setAttribute("data-theme", "light");
            swithIcon();
        }
    }			
}