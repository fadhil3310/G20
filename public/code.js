import * as section1 from "./gerakansection-1.js"
import * as section2 from "./gerakansection-2.js"
import * as section3 from "./gerakansection-3.js"
import * as section4 from "./gerakansection-4.js"
import * as section5 from "./gerakansection-5.js"
import * as section6 from "./gerakansection-6.js"

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
    daftarGerakan(2, 4, section3.gerakan5)
    daftarGerakan(2, 5, section3.gerakan6)
    daftarGerakan(2, 6, section3.gerakan7)
    daftarGerakan(2, 7, section3.gerakan8)
    daftarGerakan(2, 8, section3.gerakan9)
    daftarGerakan(2, 9, section3.gerakan10)
    daftarGerakan(2, 10, section3.gerakan11)

    daftarGerakan(3, 0, section4.gerakan1)
    daftarGerakan(3, 1, section4.gerakan2)
    daftarGerakan(3, 2, section4.gerakan3)

    daftarGerakan(4, 0, section5.gerakan1)
    daftarGerakan(4, 1, section5.gerakan2)

    daftarGerakan(5, 0, section6.gerakan1)
    daftarGerakan(5, 1, section6.gerakan2)

    mulaiPresentasi()
})

