var hora = new Date()
var hora = hora.getHours()
var minut = new Date()
var minut = minut.getMinutes()
var txt = document.getElementById('txt')
var inf = document.getElementById('inf')
txt.innerHTML = `Agora são ${hora} horas e ${minut} minutos.`
if (hora >= 9 && hora <= 10) {
    inf.innerHTML = `Agora você tem que fazer as atividades do classroom!`
} else if (hora >= 19 && hora <= 20) {
    inf.innerHTML = `Daqui a pouco tem culto!`
}