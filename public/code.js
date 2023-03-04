import * as section1 from "./gerakansection-1.js"
import * as section2 from "./gerakansection-2.js"

window.addEventListener('load', () => {
    daftarGerakan(0, 0, section1.gerakan1)
    daftarGerakan(0, 1, section1.gerakan2)
    daftarGerakan(0, 2, section1.gerakan3)

    daftarGerakan(1, 0, section2.gerakan1)
    daftarGerakan(1, 1, section2.gerakan2)
    daftarGerakan(1, 2, section2.gerakan3)

    mulaiPresentasi()
})

