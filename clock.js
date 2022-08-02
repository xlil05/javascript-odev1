let isim = prompt("Adınızı Giriniz:");

if (isim) {
    document.querySelector("#myName").innerHTML = isim;
} else {
    alert("Lütfen Bir İsim Giriniz!");
    location.reload(); // Erişimi Kısıtladım
}

// Saat Uygulaması Fonksiyonu

function showTime() {
    var a = new Date();
    var myClock = document.querySelector("#myClock");
    var gunler = ["Pazartesi","Salı","Çarşamba","Perşembe", "Cuma","Cumartesi","Pazar"];
    myClock.innerHTML = `Günlerden ${gunler[a.getDay()]} ${a.getHours()}: ${a.getMinutes()}: ${a.getSeconds()}`
    setTimeout (showTime , 1000) // Saat ileri sayımı ayarlandı
}

showTime();