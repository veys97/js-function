// *** Ilk Fonksiyonumuzu Tanimlamak *** // 

function hello() {
    console.log("Merhaba")
    helloWorld()
}

function helloWorld() {
    console.log("Hello World!")
}

// fonksiyonların hangi sırayla çağırıldığı önemli 
// Hata alabiliriz! (Disarıdan age ve userName bilgisine ihtiyacımız var. Bu yüzden fonksiyomuz düzgün çalışmaz.)
// function userCheck() {
//     if (userName && age >= 18) {
//         info.innerHTML = " Ehliyet alabilirsiniz. " 
//     }
//     else if (!userName) {
//         info.innerHTML = " Kullanici adiniz yok. "
//     }
//     else if (!age) {
//         info.innerHTML = " Yas bilginiz yok veya 18 yasindan kücüksünüz. "
//     }
// }

// fonksiyonların hangi sırayla çağırıldığı önemli 
hello()

