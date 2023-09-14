// *** Fonksiyona Parametre ve Return (Geri Dönüş) Eklemek *** //

// Temel Kurallar :
// 1- Bir fonksiyon bir veya birden fazla parametre alabilir.
// 2- Bir fonksiyon dışarı bilgi gönderebilir (return) veya göndermeyebilir.
// 3- Mümkünse fonksiyonun bağımlılıklarını azlatmak gerekir.

let firstName = "Lorem"

// Hata alır.
// function greetings() {
//     console.log(`Merhaba ${firstName}`)
// }

// function greetings(firstName = "") {
//     // console.log(`Merhaba ${firstName ? firstName : ""}`)
//     console.log(`Merhaba ${firstName}`)
// } // default = parametre alıyor.

// console.log(firstName) // değişken
// // Yukarıda tanımlanan firstName değişkeniyle hiçbir alakası yoktur.

// greetings() // sadece fonksiyon çağırıldığında 
// // greetings fonksiyonunun içerisindeki firstName parametresi boş bırakıldığı için boş gösterir.

// greetings("Apple") // fonksiyon parametresi

// greetings fonksiyonunun içerisindeki firstName parametresi değer aldığı için aldığı değeri gösterir.
// NOT : Tanımlanan firstName değişkeni sadece dışa bağlı olduğu zaman yani ilk tanımlanan fonksiyonda olduğu gibi olursa eğer o zaman kullanılır.

// let info = greetings("Apple")
// console.log(info)
// yukarıdaki kod satırının konsoldaki karşılığı = undefined

// function greetings(firstName,lastName) {
//     console.log(`Merhaba ${firstName}`)
//     console.log(`Merhaba ${firstName} ${lastName}`)
// } // default = parametre alıyor.

// greetings("Apple")
// greetings("Apple Jobs")    

function greetings2(firstName,lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings2("Steve","Jobs")
console.log(greetingsInfo)
