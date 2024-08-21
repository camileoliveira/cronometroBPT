const tempoNaTela = document.querySelector("#timer");
let decrementandoTempo = null;
const botaoIniciarRound = document.querySelector(".button__startPause");
const botaoZerarRound = document.querySelector(".button__reset");
const botaoReinicar = document.querySelector(".button__startPause-reinicar");
const somDoPlay = new Audio("./sons/play.wav");
const somDoStop = new Audio ("./sons/stop.mp3");
const titleDescanso = document.querySelector(".title__descanso");
const titleRound = document.querySelector(".title__round")


let tempoSegundos = 6 * 60;
let isRound = true 
function mostrarTempo() {
  const tempo = new Date(tempoSegundos * 1000);
  const tempoFormatado = tempo.toLocaleString("pt-Br", {
    minute: "2-digit",
    second: "2-digit",
  });
  tempoNaTela.innerHTML = `${tempoFormatado}`;
}
mostrarTempo();

function decrementarTempo() {
  tempoSegundos = tempoSegundos - 1;
  if (tempoSegundos == 0) {
    if(isRound){
        somDoStop.play()
        iniciarDescanso()
    }else{
        zerarTempo(6*60)
        iniciarRound()
    }
    
  }
  mostrarTempo();
}

botaoIniciarRound.addEventListener("click", iniciarRound);
botaoZerarRound.addEventListener("click" , zerarRound);


function iniciarRound() {
  somDoPlay.play()
  decrementandoTempo = setInterval(decrementarTempo, 1000);
  botaoIniciarRound.style.display= "none"
  botaoZerarRound.style.display= "block"
  titleDescanso.style.display = "none";
  titleRound.style.display = "block"
 
}

function zerarTempo(novoTempo) {
  clearInterval(decrementandoTempo);
  decrementandoTempo = null;
  tempoSegundos = novoTempo;
  mostrarTempo();
  botaoIniciarRound.style.display= "block"
  botaoZerarRound.style.display = "none"
  titleDescanso.style.display = "block"
  titleRound.style.display = "none"
}

function iniciarDescanso(){
    isRound = false
   zerarTempo(80)
   decrementandoTempo = setInterval(decrementarTempo, 1000);
}

function zerarRound(){
    zerarTempo(6*60)
}

