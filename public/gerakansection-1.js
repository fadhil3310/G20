let abc = 'asdsadsad'

const background = document.querySelector("#background-s1")
const titleh1 = document.querySelector('#title-s1')
const backgroundOverlay = document.querySelector('#background-overlay-s1')
const nextButtonContainer = document.querySelector('#next-container-s1')


export function gerakan1() {
    background.style.display = 'block'
    background.style.opacity = '1'
    background.animate([
        {transform: 'scale(1)'},
        {transform: 'scale(3)'}
    ], { duration: 4000, easing: 'ease-out' })
    background.style.transform = 'scale(3)'
    
    titleh1.animate([
        {transform: 'scale(1)', fontWeight: 100},
        {transform: 'scale(3)', fontWeight: 800}
    ], { duration: 4000, easing: 'ease-out' })
    titleh1.style.transform = 'scale(3)'
    titleh1.style.fontWeight = 800

    backgroundOverlay.animate([
        {transform: 'scale(1)'},
        {transform: 'scale(15)'}
    ], { duration: 1500, easing: 'ease-out' })
    backgroundOverlay.style.transform = 'scale(15)'
}

export function gerakan2() {
    nextButtonContainer.style.display = 'flex'
}