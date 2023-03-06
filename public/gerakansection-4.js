const section4 = document.querySelector('#section-4')
const titleContainer1 = document.querySelector('#title-container-1-s4')
const background1 = document.querySelector('#background-1-s4')
const content1 = document.querySelector('#content-1-s4')

const background2 = document.querySelector('#background-2-s4')

export function gerakan1() {
    section4.style.display = 'block'
    section4.scrollTop = 0
}

export function gerakan2() {
    gsap.to(titleContainer1, {
        rotationY: '50deg',
        y: 300,
        duration: 1.5
    })

    content1.style.display = 'block'
    gsap.from(content1, {
        yPercent: 120,
        rotationY: 90,
        duration: 2.5,
        onComplete: () => section4.style.overflowY = 'auto'
    })

    background1.style.display = 'block'
    gsap.from(background1, {
        opacity: 0,
        duration: 1.5
    })
}

export function gerakan3() {
    section4.style.display = 'none'
    keGerakanSelanjutnya()
}