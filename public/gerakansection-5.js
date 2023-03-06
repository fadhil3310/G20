const section5 = document.querySelector('#section-5')

const g20Logo = document.querySelector('#g20-logo-s5')
const backgroundKiri = document.querySelector('#background-kiri-s5')
const backgroundKanan = document.querySelector('#background-kanan-s5')

export function gerakan1() {
    section5.style.display = 'block'
    backgroundKiri.play()
    backgroundKanan.play()

    backgroundKiri.style.display = 'block'
    gsap.from(backgroundKiri, {
        xPercent: -100,
        yPercent: 100,
        duration: 1.5,
        onComplete: () => {
            backgroundKanan.style.display = 'block'
            gsap.from(backgroundKanan, {
                xPercent: 100,
                yPercent: -100,
                duration: 1.5,
                onComplete: () => {
                    g20Logo.style.display = 'block'

                    g20Logo.style.left = (window.innerWidth / 2) - (g20Logo.clientWidth / 2) + 'px'
                    g20Logo.style.top = (window.innerHeight / 2) - (g20Logo.clientHeight / 2) + 'px'

                    gsap.from(g20Logo, {
                        scale: 0,
                        duration: 1.5
                    })
                }
            })
        }
    })   
}

export function gerakan2() {
    keGerakanSelanjutnya()

    gsap.to(g20Logo, {
        scale: 0,
        opacity: 0,
        duration: 1,
        onComplete: () => {
            gsap.to(backgroundKiri, {
                xPercent: -100,
                yPercent: 100,
                duration: 1.5,
            })
        
            gsap.to(backgroundKanan, {
                xPercent: 100,
                yPercent: -100,
                duration: 1.5,
            })

            setTimeout(() => {
                backgroundKiri.stop()
                backgroundKanan.stop()
                section5.style.display = 'none'
            }, 1500)
        }
    })
}