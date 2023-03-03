let abc = 'asdsadsad'

const section1 = document.querySelector('#section-1')
const background = document.querySelector("#background-s1")
const titleh1 = document.querySelector('#title-s1')
const backgroundOverlay = document.querySelector('#background-overlay-s1')
const nextButtonContainer = document.querySelector('#next-container-s1')
const nextButton = document.querySelector('#next-button-s1')


export function gerakan1() {
    background.style.display = 'block'
    background.style.opacity = '1'
    background.animate([
        {transform: 'scale(1)'},
        {transform: 'scale(3)'}
    ], { duration: 5000, easing: 'ease-out' })
    background.style.transform = 'scale(3)'
    
    titleh1.animate([
        {transform: 'scale(1)', fontWeight: 100},
        {transform: 'scale(3)', fontWeight: 800}
    ], { duration: 5000, easing: 'ease-out' })
    titleh1.style.transform = 'scale(3)'
    titleh1.style.fontWeight = 800

    backgroundOverlay.animate([
        {transform: 'scale(1)'},
        {transform: 'scale(15)'}
    ], { duration: 2000, easing: 'ease-out' })
    backgroundOverlay.style.transform = 'scale(15)'
}

export function gerakan2() {
    nextButtonContainer.style.display = 'flex'
    nextButton.addEventListener('click', () => gerakan3())
}

export function gerakan3() {
    titleh1.animate([
        {transform: 'scale(3) translateX(0)'},
        {transform: 'scale(3) translateX(-100vw)'}
    ], { duration: 1500, easing: 'ease-in' })
    titleh1.style.transform = 'scale(3) translateX(-100vw)'

    setTimeout(() => {
        nextButtonContainer.animate([
            {transform: 'translateX(0)'},
            {transform: 'translateX(-100vw)'}
        ], { duration: 500, easing: 'ease-in' })
        nextButtonContainer.style.transform = 'translateX(-100vw)'
        backgroundOverlay.animate([
            {transform: 'scale(15)'},
            {transform: 'scale(1)'}
        ], { duration: 500, easing: 'linear' })
        backgroundOverlay.style.transform = 'scale(1)'

        setTimeout(() => {
            background.style.display = 'none'
            section1.style.display = 'none'
            keGerakanSelanjutnya()
        }, 500) 
    }, 200)


}