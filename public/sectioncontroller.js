/**
 * Untuk mengelola section
 * seperti untuk navigasi antar section (maju, mundur)
 */

/**
 * Sudah di section berapakah sekarang?
 */
let sectionBerapa = 0

/**
 * Sudah di gerakan berapakah sekarang dalam section sekarang?
 */
let gerakanBerapa = 0

let gerakan = {
/**
 * Contoh isi:
 *  1: [
 *      callback_gerakan_ke_1
 *      callback_gerakan_ke_2
 *      callback_gerakan_ke_3
 *  ],
 *  2: [
 *      callback_gerakan_ke_1
 *      callback_gerakan_ke_2
 *      callback_gerakan_ke_3
 *  ]
 */
}

function mulaiPresentasi() {
    //gerakan[1][0]()
}

/**
 * Untuk
 */
window.addEventListener('keydown', keyboardPressEvent)
function keyboardPressEvent(ev) {
    let tombolApa = ev.code

    // Jikalau operator menekan tombol "panah kanan →"
    // Maka maju ke gerakan berikutnya
    if (tombolApa == 'ArrowRight') {
        keGerakanSelanjutnya()
    }
    // Tetapi jika operator menekan tombol "panah kiri ←"
    // Maka mundur ke gerakan sebelumnya
    else if (tombolApa == 'ArrowLeft') {
        keGerakanSebelumnya()
    }
}

function keGerakanSelanjutnya() {
    if (gerakanBerapa < gerakan[sectionBerapa].length) {
        gerakan[sectionBerapa][gerakanBerapa++]()
    } else {
        if (sectionBerapa + 1 < Object.entries(gerakan).length) {
            sectionBerapa++
            gerakanBerapa = 0
            gerakan[sectionBerapa][gerakanBerapa]()
        } else {
            console.log('Presentasi selesai')
        }
    }
    
}

function keGerakanSebelumnya() {
    // Belum
    console.log('Fungsi gerakan sebelumnya belum dibuat')
}

function daftarGerakan(sectionKe, gerakanKe, callback, options) {
    // Cek dulu apakah di gerakan bagian section tersebut
    // sudah ada isinya atau belum
    // Jika belum, maka assign sebuah array ke dalam
    // gerakan bagian section tersebut
    if (gerakan[sectionKe] === undefined) {
        gerakan[sectionKe] = []
    }

    gerakan[sectionKe][gerakanKe] = callback
}