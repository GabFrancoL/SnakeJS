// Defining variables
const loading_container = document.getElementById('loading_container')
const loading_text = document.getElementById('loading_text')
const loading_animation_border = document.getElementById('loading_animation_border')
const loading_animation_filler = document.getElementById('loading_animation_filler')
const textArr = ['loading', 'loading.', 'loading..', 'loading...']
const main = document.querySelector('main')
let bar_width = window.getComputedStyle(loading_animation_border).width
bar_width = parseFloat(bar_width.slice(0, bar_width.indexOf('p')))
const time = (bar_width * 10) + 800

// Text animation promise
function textAnimationPromise() {
    return new Promise(res => {
        let aux = 1
        const textInterval = setInterval(() => {
            loading_text.textContent = textArr[aux]
            aux++
            if (aux >= textArr.length) {
                aux = 0
                loading_text.textContent = textArr[3]
            }
        }, 300)
        setTimeout(() => {
            clearInterval(textInterval)
            res()
        }, time)
    })
}

// Bar animation promise
function barAnimationPromise() {
    return new Promise(res => {
        let aux = 0
        const barInterval = setInterval(() => {
            loading_animation_filler.style.width = `${aux}px` 
            if (aux <= bar_width) {
                aux++
            }
        }, 10);
        setTimeout(() => {
            clearInterval(barInterval)
            res()
        }, time)
    })
}

// After resulting both promises:
// Run loading animation then clear the interval
// After, run the animation for main tag to appear
const animation = Promise.all([textAnimationPromise(), barAnimationPromise()])

animation.then(() => {
    loading_container.setAttribute('class', 'easeOutAnimation')
    setTimeout(() => {
        loading_container.style.display = 'none'
        main.style.display = 'flex'
        main.setAttribute('class', 'easeInAnimation')
    }, 500)
}).catch(err => {
    loading_container.setAttribute('class', 'easeOutAnimation')
    setTimeout(() => {
        loading_container.style.display = 'none'
        main.style.display = 'flex'
        main.setAttribute('class', 'easeInAnimation')
    }, 500)
    console.log(err)
})
