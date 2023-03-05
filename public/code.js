import * as section1 from "./gerakansection-1.js"
import * as section2 from "./gerakansection-2.js"
import * as section3 from "./gerakansection-3.js"

window.addEventListener('load', () => {
    daftarGerakan(0, 0, section1.gerakan1)
    daftarGerakan(0, 1, section1.gerakan2)
    daftarGerakan(0, 2, section1.gerakan3)

    daftarGerakan(1, 0, section2.gerakan1)
    daftarGerakan(1, 1, section2.gerakan2)
    daftarGerakan(1, 2, section2.gerakan3)
    daftarGerakan(1, 3, section2.gerakan4)

    daftarGerakan(2, 0, section3.gerakan1)
    daftarGerakan(2, 1, section3.gerakan2)
    daftarGerakan(2, 2, section3.gerakan3)
    daftarGerakan(2, 3, section3.gerakan4)

    mulaiPresentasi()
})

