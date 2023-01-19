// Defining variables
const controls_btn = document.getElementById('controls_btn')
const settings_btn = document.getElementById('settings_btn')
const controls_popup = document.getElementById('controls_popup')
const settings_popup = document.getElementById('settings_popup')
const settings_close_btn = document.getElementById('settings_close_btn')
const controls_close_btn = document.getElementById('controls_close_btn')
const prev_theme = document.getElementById('prev_theme')
const next_theme = document.getElementById('next_theme')
const theme_text = document.getElementById('theme_text')
const prev_difficulty = document.getElementById('prev_difficulty')
const next_difficulty = document.getElementById('next_difficulty')
const difficulty_text = document.getElementById('difficulty_text')
const themes = ['dark', 'light']
const difficulty = ['easy', 'normal', 'hard']

// Defining functions
function openScreen(screenName) {
    screenName.setAttribute('class', 'easeInAnimationPopup')
    screenName.style.display = 'flex'
    setTimeout(() => {
        screenName.removeAttribute('class')
    }, 500)
}

function closeScreen(screenName) {
    screenName.setAttribute('class', 'easeOutAnimationPopup')
    setTimeout(() => {
        screenName.style.display = 'none'
        screenName.removeAttribute('class')
    }, 500)
}

function changeTheme() {
    const currentValue = document.body.getAttribute('data-theme')
    if (currentValue === 'dark') {
        document.body.setAttribute('data-theme', 'light')
        theme_text.textContent = 'light theme'
    } else {
        document.body.setAttribute('data-theme', 'dark')
        theme_text.textContent = 'dark theme'
    }
}

// Open screen buttons
settings_btn.addEventListener('click', () => {
    openScreen(settings_popup)
})

controls_btn.addEventListener('click', () => {
    openScreen(controls_popup)
})

// Close screen buttons
settings_close_btn.addEventListener('click', () => {
    closeScreen(settings_popup)
})

controls_close_btn.addEventListener('click', () => {
    closeScreen(controls_popup)
})

// Theme selector
next_theme.addEventListener('click', changeTheme)
prev_theme.addEventListener('click', changeTheme)
