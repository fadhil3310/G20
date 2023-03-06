
const section2 = document.querySelector('#section-2')
const section3 = document.querySelector('#section-3')

const openingContainer = document.querySelector('#opening-container-s3')

const afterOpeningContainer = document.querySelector('#after-opening-container-s3')
const globe = document.querySelector('#globe-s3')
const countryList = document.querySelector('#country-list-container-s3')
const afterOpeningTitleContainer = document.querySelector('#after-opening-title-container-s3')
const latarBelakangTitleContainer = document.querySelector('#latar-belakang-title-container-s3')

const timeline = document.querySelector('#timeline-s3')
const timelineYearContainer = document.querySelector('#timeline-year-container-s3')
const timelineYear1997 = document.querySelector('#timeline-year-1997-s3')
const timelineYear1998 = document.querySelector('#timeline-year-1998-s3')
const timelineYear1999 = document.querySelector('#timeline-year-1999-s3')
const timelineYear2008 = document.querySelector('#timeline-year-2008-s3')

const krisisMoneterIlustrasi = document.querySelector('#krisis-moneter-ilustrasi-s3')
const krisisMoneterTitle = document.querySelector('#krisis-moneter-title-s3')
const krisisMoneterSidebar = document.querySelector('#krisis-moneter-sidebar-s3')
const krisisMoneterTerdampakContainer = document.querySelector('#krisis-moneter-terdampak-container-s3')
const krisisMoneterTerdampakTitle = document.querySelector('#krisis-moneter-terdampak-title-s3')

const g7title = document.querySelector('#g7-title-s3')
const g7Sidebar1 = document.querySelector('#g7-sidebar-1-s3')
const g7Sidebar2 = document.querySelector('#g7-sidebar-2-s3')

const g20pertama = document.querySelector('#g20-pertama-s3')

const transitionOverlay = document.querySelector('#transition-overlay-s3')

// Tampilkan opening section 3
export function gerakan1() {
    section3.style.display = 'block'

    section3.animate([
        {
            transform: 'translateX(100%)'
        },
        {
            transform: 'translateX(0)'
        }
    ], { duration: 1500, easing: 'ease-out' })

    globe.style.display = 'none'
}

export function gerakan2() {
    globe.style.display = 'block'

    section3.animate([
        {
            background: 'white'

        },
        {
            background: 'black'
        }
    ], { duration: 1500, easing: 'ease-out' })
    section3.style.background = 'black'
    openingContainer.animate([
        {
            transform: 'scale(1)',
            opacity: 1
        },
        {
            transform: 'scale(0.5)',
            opacity: 0
        }
    ], { duration: 1500, easing: 'ease-out' })
    openingContainer.style.opacity = 0

    setTimeout(() => {
        globe.contentWindow.setSpeed(0.005)

        afterOpeningContainer.animate([
            {opacity: 0},
            {opacity: 1}
        ], 500)
        afterOpeningContainer.style.opacity= 1
        afterOpeningContainer.animate([
            {
                scale: 30,
            },
            {
                scale: 1
            }
        ], { duration: 3500 })
        globe.style.left = window.innerWidth / 2 - globe.clientWidth / 2 + 'px'

        setTimeout(() => {

            globe.animate([
                {
                    scale: 3
                },
                {
                    scale: 0.75
                }
            ], { duration: 1000, easing: 'ease-out' })
            globe.animate([
                {
                    translate: '0 0'
                },
                {
                    translate: '-400px 0'
                }
            ], { duration: 1000, easing: 'ease-in-out' })
            globe.style.scale = 0.75
            globe.style.translate = '-400px 0'

            globe.contentWindow.setSpeedFromTo(0.005, 0.2, 1)

            setTimeout(() => {
                globe.contentWindow.setSpeedFromTo(0.2, 0.015, 1)
            }, 1500)

            countryList.style.display = 'flex'

            let delay = 0
            for (const country of countryList.children) {
                setTimeout(() => {
                    country.style.display = 'block'
                    country.animate([
                        {
                            transform: 'translateX(-1000px) scale(0)',
                            opacity: 0
                        },
                        {
                            transform: 'translateX(0) scale(1)',
                            opacity: 1
                        }
                    ], { duration: 1500, easing: 'ease-out' } )
                }, delay)
                delay += 200
            }
            
            setTimeout(() => {
                afterOpeningTitleContainer.style.display = 'block'
            }, 2500)
            
        }, 3500)

    }, 2000)
}

// Tampilkan "Mengapa G20 dibentuk?"
export function gerakan3() {
    latarBelakangTitleContainer.style.display = 'flex'
}

// Tampilkan timeline
export function gerakan4() {
    latarBelakangTitleContainer.style.display = 'none'

    setTimeout(() => {

        globe.animate([
            { scale: 0.75 },
            { scale: 2 }
        ], { duration: 3000, easing: 'ease-out' })
        globe.animate([
            { translate: '-400px 0' },
            { translate: '0 0' }
        ], { duration: 3000, easing: 'ease-in-out' })
        globe.style.scale = 2
        globe.style.translate = '0 0'

        globe.contentWindow.setSpeedFromTo(0.005, 0.5, 1)
    
        countryList.animate([
            { translate: '0 0', scale: 1 },
            { translate: '200% 0', scale: 2.5 }
        ], { duration: 2500, easing: 'ease-in' })
        countryList.style.translate = '200% 0'
        countryList.style.scale = 2.5
    
        afterOpeningTitleContainer.animate([
            { translate: '0 0', scale: 1 },
            { translate: '-1000px 1000px', scale: 2.5 }
        ], { duration: 2000, easing: 'ease-in' })
        afterOpeningTitleContainer.style.translate = '-1000px 1000px'
        afterOpeningTitleContainer.style.scale = 2.5
    
        // Hilangkan daftar negara dan judul "Anggota G20"
        setTimeout(() => {
            countryList.style.display = 'none'
            afterOpeningTitleContainer.style.display = 'none'
        }, 2500)

        // Tampilkan timeline tahun
        setTimeout(() => {
            tataLetakTimeline()
            timeline.style.display = 'flex'

            timeline.animate([
                { translate: '-1300px 0' },
                { translate: '1990px 0' }
            ], { duration: 8000, easing: 'ease-in-out' })
            timeline.style.translate = '1990px 0'
            
            setTimeout(() => {
                timelineYear1997.classList.add('year-highlight-up-s3')

                globe.contentWindow.accelerateToRotation(0.195, 70.24, 1000)
            }, 7500)
        }, 2000)
    }, 1000) 
}

// Tampilkan tulisan Krisis Moneter Asia
export function gerakan5() {
    krisisMoneterIlustrasi.style.display = 'block'
    krisisMoneterIlustrasi.play()
    gsap.from(krisisMoneterIlustrasi, {
        opacity: 0,
        duration: 1
    })

    krisisMoneterTitle.style.display = 'block'
    let y = (window.innerHeight / 2) - (krisisMoneterTitle.clientHeight / 2)
    let x = (window.innerWidth / 2) - (krisisMoneterTitle.clientWidth / 2)
    krisisMoneterTitle.style.top = y + 'px'
    krisisMoneterTitle.style.left = x + 'px'
    

    gsap.from(krisisMoneterTitle, {
        clipPath: 'inset(50%)',
        duration: 1
    })
}
 
// Tampilkan negara asal Krisis Moneter Asia
export function gerakan6() {
    gsap.to(krisisMoneterTitle, { clipPath: 'inset(50%)', duration: 1 })
    gsap.to(timeline, {
        y: 100,
        background: 'linear-gradient(to top, black 50%, transparent)',
        duration: 1
    })
    gsap.to(globe, { scale: 2.2, duration: 1.5 })

    setTimeout(() => {
        krisisMoneterSidebar.style.display = 'flex'
        gsap.fromTo(krisisMoneterSidebar, {
            scale: 0,
            x: 300,
            y: 120 
        }, {
            scale: 1, 
            x: 120, 
            y: 120, 
            duration: 1.5
        })
    }, 1000)
    
}

// Tampilkan negara terdampak Krisis Moneter Asia
export function gerakan7() {
    gsap.to(krisisMoneterSidebar, {
        x: 0,
        y: 0,
        duration: 0.75
    })

    gsap.to(krisisMoneterSidebar, {
        background: 'linear-gradient(to right, black, transparent)',
        duration: 1,
        delay: 1
    })

    krisisMoneterTerdampakTitle.style.display = 'block'
    gsap.from(krisisMoneterTerdampakTitle, {
        scale: 0,
        x: 1500,
        y: 1000,
        duration: 1
    })

    setTimeout(() => {
        animasikanSemuaNegaraTerdampak()
    }, 250)
}

// Tampilkan negara G7
export function gerakan8() {
    gsap.to(krisisMoneterSidebar, {
        x: -krisisMoneterSidebar.clientWidth,
        duration: 1,
        onComplete: () => {
            krisisMoneterSidebar.style.display = 'none'
        }
    })

    setTimeout(() => {
        globe.contentWindow.accelerateToRotation(0.7, 71.976, 1000)

        timelineYear1997.classList.remove('year-highlight-up-s3')
        gsap.to(timeline, {
            x: 1800,
            duration: 3,
            onComplete: () => {
                timelineYear1999.classList.add('year-highlight-up-s3')
            }
        })

        setTimeout(() => {
            g7title.style.display = 'block'
            g7title.style.top = (window.innerHeight / 2) - (g7title.clientHeight / 2) + 'px'
            g7title.style.left = (window.innerWidth / 2) - (g7title.clientWidth / 2) + 'px'
            gsap.from(g7title, {
                scale: 0,
                duration: 1
            })

            setTimeout(() => {
                g7Sidebar1.style.display = 'flex'
                g7Sidebar2.style.display = 'flex'
                gsap.from(g7Sidebar1, {
                    x: -g7Sidebar1.clientWidth,
                    duration: 1
                })
                gsap.from(g7Sidebar2, {
                    x: -g7Sidebar1.clientWidth - g7Sidebar2.clientWidth,
                    duration: 1.5
                })

                setTimeout(() => {
                    gsap.to(g7Sidebar2, {
                        //x: -g7Sidebar1.clientWidth - g7Sidebar2.clientWidth,
                        right: 0,
                        left: 'unset',
                        duration: 1.5
                    })
                    gsap.to(globe, {
                        scale: 1.75,
                        duration: 1
                    })
                }, 2000)
            }, 1000)
        }, 2000)
    }, 1000)
    
}

// Ke 2008
export function gerakan9() {
    gsap.to(krisisMoneterIlustrasi, {
        opacity: 0,
        duration: 1
    })

    timelineYear1999.classList.remove('year-highlight-up-s3')

    timeline.style.background = 'none'
    gsap.to(timeline, {
        x: 880,
        y: -50,
        duration: 3,
        onComplete: () => {
            timelineYear2008.classList.add('year-highlight-down-s3')
            globe.contentWindow.accelerateToRotation(0.55, 143, 1000)

            krisisMoneterIlustrasi.src = "./conference.mp4"
            krisisMoneterIlustrasi.play()
            gsap.to(krisisMoneterIlustrasi, {
                opacity: 0.25,
                duration: 1
            })

            g20pertama.style.display = 'block'
            gsap.from(g20pertama, {
                opacity: 0,
                duration: 1
            })
        }
    })
    gsap.to(g7Sidebar1, {
        x: -g7Sidebar1.clientWidth,
        duration: 1
    })
    gsap.to(g7Sidebar2, {
        right: -g7Sidebar2.clientWidth,
        duration: 1
    })
    gsap.to(g7title, {
        opacity: 0,
        duration: 1
    })

    globe.contentWindow.setSpeedFromTo(0, 0.04, 2)

    setTimeout(() => {
        timelineYear2008.classList.add('year-highlight-down-s3')
        
        g7Sidebar1.style.display = 'none'
        g7Sidebar2.style.display = 'none'
        g7title.style.display = 'none'
    }, 1000)
}

// Penutup
export function gerakan10() {
    timelineYear2008.classList.remove('year-highlight-down-s3')

    gsap.to(g20pertama, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            g20pertama.style.display = 'none'
        }
    })

    gsap.to(timeline, {
        x: -500,
        y: 0,
        duration: 10
    })

    globe.contentWindow.setSpeedFromTo(0, 0.02, 2)
}

// Transisi ke section berikutnya
export function gerakan11() {
    gsap.to(globe, {
        x: -1300,
        y: 100,
        duration: 3
    })
    gsap.to(timeline, {
        x: -1360,
        y: 0,
        duration: 3
    })

    transitionOverlay.style.display = 'block'
    gsap.to(transitionOverlay, {
        scale: 1,
        duration: 1,
        delay: 2,
        onComplete: () => {
            section3.style.display = 'none'
            keGerakanSelanjutnya()
        }
    })
}

function tataLetakTimeline() {
    let i = 1
    let x = 0
    for (const year of timelineYearContainer.children) {
        // Ganjil, letakkan di bawah track
        if (i % 2 != 0) {
            year.style.rotate = '-90deg'
            year.style.right = x + 'px'
            year.style.bottom = 0
        } else {
            year.style.rotate = '90deg'
            year.style.right = x + 'px'
            year.style.top = 0
        }
        x += 100
        i++
    }   
}

function animasikanSemuaNegaraTerdampak() {
    krisisMoneterTerdampakContainer.style.overflow = 'hidden'
    krisisMoneterTerdampakContainer.style.display = 'flex'

    let i = 1
    for (const negara of krisisMoneterTerdampakContainer.children) {
        gsap.from(negara, { scale: 0, x: 1000, duration: i })
        i += 0.25
    }

    setTimeout(() => {
        krisisMoneterTerdampakContainer.style.overflow = 'auto'
    }, 3000)
}