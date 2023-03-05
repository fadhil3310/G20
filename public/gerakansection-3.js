
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
}

export function gerakan2() {
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
        globe.contentWindow.setSpeed(0.05)

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

            globe.contentWindow.setSpeedFromTo(0.05, 0.005, 1)

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

export function gerakan3() {
    latarBelakangTitleContainer.style.display = 'flex'
}

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
                { translate: '2050px 0' }
            ], { duration: 8000, easing: 'ease-in-out' })
            timeline.style.translate = '1990px 0'
            
            setTimeout(() => {
                timelineYear1997.classList.add('year-highlight-up-s3')

                globe.contentWindow.setSpeedFromTo(0.5, 0, 1)
            }, 7500)
        }, 2000)

    }, 1000) 
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