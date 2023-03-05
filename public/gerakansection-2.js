const section2 = document.querySelector('#section-2')

const titleContainer = document.querySelector('#title-container-s2')
const title = document.querySelector('#title-s2')

const backgroundContainer = document.querySelector('#background-container-s2')
const side = document.querySelector('#side-s2')
const decorationContainer = document.querySelector('#decoration-container-s2')

const contentContainer = document.querySelector('#content-container-s2')
const contentSideTitle = document.querySelector('#content-side-title-s2')
const contentSideChartContainer = document.querySelector('#content-side-chart-container-s2')

const kertas = document.querySelector('#kertas-s2')

// Tampilkan tulisan "Apa itu G20?"
export function gerakan1() {
    section2.style.display = 'block'

    kunciKeyboard = false
}

export function gerakan2() {
    titleContainer.animate([
        { transform: 'rotateY(0) translateX(0)' },
        { transform: 'rotateY(70deg) translateX(-400px)' }
    ], { duration: 1000, easing: 'ease-out' })
    titleContainer.style.transform = 'rotateY(70deg) translateX(-400px)'

    setTimeout(() => {
        side.style.display = 'none'
        decorationContainer.style.display = 'none'

        backgroundContainer.style.display = 'block'

        backgroundContainer.animate([
            { transform: 'translateX(100%)' },
            { transform: 'translateX(0)' }
        ], { duration: 750, easing: 'ease-in-out' }) 
        
        setTimeout(() => {
            decorationContainer.style.display = 'block'
            decorationContainer.animate([
                { transform: 'translateX(40px)' },
                { transform: 'translateX(0)' }
            ], { duration: 500, easing: 'ease-out' })  
            decorationContainer.style.transform =  'translateX(0)'

            setTimeout(() => {
                side.style.display = 'block'
                side.animate([
                    { transform: 'translateX(390px)' },
                    { transform: 'translateX(0)' }
                ], { duration: 500, easing: 'ease-out' })  
                side.style.transform =  'translateX(0)'

                setTimeout(() => {     
                    kertas.style.display = 'block'
                    // Atur posisi kertas agar di tengah
                    let x = ((window.innerWidth - 430) / 2) - (kertas.clientWidth / 2)
                    let y = (window.innerHeight / 2) - (kertas.clientHeight / 2)
                    kertas.style.top = y + 'px'
                    kertas.style.left = x + 'px'

                    kertas.animate([
                        { transform: 'rotate(30deg) translateY(-100%)' },
                        { transform: 'rotate(0) translateY(0)' }
                    ], { duration: 500, easing: 'ease-out' })
                }, 1000)

            }, 500)
        }, 750)

    }, 800)
}

export function gerakan3() {
    title.animate([
        {transform: 'translateX(0)'},
        {transform: 'translateX(-400px)'}
    ], { duration: 500, easing: 'ease-out' })
    title.style.transform = 'translateX(-400px)'
    backgroundContainer.animate([
        {transform: 'translateX(0)'},
        {transform: 'translateX(-1000px)'}
    ], { duration: 1000, easing: 'ease-out' })
    backgroundContainer.style.transform = 'translateX(-1000px)'

    contentSideTitle.style.top = (window.innerHeight / 2) - (contentSideTitle.clientHeight / 2) + 'px'

    setTimeout(() => {
        contentSideChartContainer.style.display = 'flex'
    }, 1500)
}

export function gerakan4() {
    backgroundContainer.animate([
        {transform: 'translateX(-1000px)'},
        {transform: 'translateX(-2000px)'}
    ], { duration: 1500, easing: 'ease-out' })
    backgroundContainer.style.transform = 'translateX(-2000px)'
    keGerakanSelanjutnya()
}