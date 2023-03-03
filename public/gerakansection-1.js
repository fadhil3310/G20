let abc = 'asdsadsad'

const background = document.querySelector("#background-s1")
const title = document.querySelector('#title-container-s1')
const titleh1 = document.querySelector('#title-container-1-s1')
const backgroundOverlay = document.querySelector('#background-overlay-s1')
const nextButtonContainer = document.querySelector('#next-container-s1')
//const titleh2 = document.querySelector('#title-container-2-s1')

export function gerakan1() {
    background.style.display = 'block'
    /*background.animate([
        {opacity: '0'},
        {opacity: '1'}
    ], { duration: 1 })*/
    background.style.opacity = '1'
    background.animate([
        {transform: 'scale(1)'},
        {transform: 'scale(5)'}
    ], { duration: 3500, easing: 'ease-out' })
    background.style.transform = 'scale(5)'
    

    titleh1.animate([
        {transform: 'scale(1)', fontWeight: 100},
        {transform: 'scale(3)', fontWeight: 800}
    ], { duration: 3500, easing: 'ease-out' })
    titleh1.style.transform = 'scale(3)'
    titleh1.style.fontWeight = 800

    backgroundOverlay.animate([
        {transform: 'scale(1)'},
        {transform: 'scale(15)'}
    ], { duration: 1000, easing: 'ease-out' })
    backgroundOverlay.style.transform = 'scale(15)'
    /*titleh2.animate([
        {transform: 'scale(1)', opacity: 0},
        {transform: 'scale(2)', opacity: 1}
    ], { duration: 1000, easing: 'ease-in-out' })
    titleh2.style.transform = 'scale(2)'
    titleh2.style.opacity = 1*/
}

export function gerakan2() {
    nextButtonContainer.style.display = 'flex'
}