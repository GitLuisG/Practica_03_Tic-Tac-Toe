const tablero = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
let Turno = true;
let Puntos=[],PuntosPC=[];
let J1 = 0
let J2 = 0
let Vs = 1
const $gBtn = $('.gBtn')

$gBtn.on('click', gBtn_click)

function Player($btn,r,c){
    //if(tablero[r][c] == 0 && tablero[r][c] != 1 && tablero[r][c] != 2){
        $btn.css('background-color', 'red').text('X')
        tablero[r][c] = 1
    //}else{
    //    return;}

}

window.addEventListener("keydown", function(event){
    if(event.keyCode == 13){
        NuevaPartida()
    }
    if(event.keyCode == 17){
        
        for(let i=0;i<tablero.length;i++){
            for(let j=0;j<tablero.length;j++){
                tablero[i][j] = 0;
            }
        }
        var color = $('.gBtn')
        color.css('background-color', 'White').text(' ')
        color = null;
    }

    if(event.keyCode == 80){
    Vs = 1
    }
    if(event.keyCode == 67){
    Vs = 2
    }
});

function NuevaPartida(){
    alert('Nueva Partida');
    location.reload();
}

function Equipo($btn,r,c){
    //if(tablero[r][c] == 0 && tablero[r][c] != 1 && tablero[r][c] != 2){
    $btn.css('background-color', 'Blue').text('O')
    tablero[r][c] = 2
    //}else{
    //    return;
    //}
}

function printScore(r,c){

    document.getElementById('Score').innerHTML = Puntos++  
}
function printScorePC(r,c){
    document.getElementById('ScorePC').innerHTML = PuntosPC++
}

function end(){
    const continuar = confirm('Desea continuar')

    if(continuar){
        console.log('Aseguir jugando')
        for(let i=0;i<tablero.length;i++){
            for(let j=0;j<tablero.length;j++){
                tablero[i][j] = 0;
            }
        }
    }else{
        alert('bye')
        location.reload();
    }
}
let i = 1
let j = 1
function VecesGanadas(Jugador){
    if(Jugador == 1){
        document.getElementById('J1').innerHTML = `Veces Ganadas ${i++}`
    }
    if(Jugador == 2){
        document.getElementById('J2').innerHTML = `Veces Ganadas ${j++}`
    }
}

function Ganador(Jugador){
    if(tablero[0][0] == Jugador && tablero[1][1] == Jugador && tablero[2][2] == Jugador){
        VecesGanadas(Jugador)
        alert('El Ganador fue Player '+Jugador)
        end()

    }
    if(tablero[0][0] == Jugador && tablero[1][0] == Jugador && tablero[2][0] == Jugador){
        VecesGanadas(Jugador)
        var a = document.getElementById('Ganador').innerHTML = "Player "+Jugador
        alert('El Ganador fue Player '+Jugador)
        end()
    }
    if(tablero[0][0] == Jugador && tablero[0][1] == Jugador && tablero[0][2] == Jugador){
        VecesGanadas(Jugador)
        alert('El Ganador fue Player '+Jugador)
        end()
    }
    if(tablero[0][2] == Jugador && tablero[1][2] == Jugador && tablero[2][2] == Jugador){
        VecesGanadas(Jugador)
        alert('El Ganador fue Player '+Jugador)
        end()
    }
    if(tablero[0][2] == Jugador && tablero[1][1] == Jugador && tablero[2][2] == Jugador){
        VecesGanadas(Jugador)
        alert('El Ganador fue Player '+Jugador)
        end()
    }
    if(tablero[0][2] == Jugador && tablero[1][1] == Jugador && tablero[2][2] == Jugador){
        VecesGanadas(Jugador)
        alert('El Ganador fue Player '+Jugador)
        end()
    }
    if(tablero[2][0] == Jugador && tablero[2][1] == Jugador && tablero[2][2] == Jugador){
        VecesGanadas(Jugador)
        alert('El Ganador fue Player '+Jugador)
        end()
    }
    if(tablero[1][0] == Jugador && tablero[1][1] == Jugador && tablero[1][2] == Jugador){
        VecesGanadas(Jugador)
        var a = document.getElementById('Ganador').innerHTML = "Player "+Jugador
        alert('El Ganador fue Player '+Jugador)
        end()
    }
    if(tablero[0][1] == Jugador && tablero[1][1] == Jugador && tablero[2][1] == Jugador){
        VecesGanadas(Jugador)
        alert('El Ganador fue Player '+Jugador)
        end()
    }
    if(tablero[0][2] == Jugador && tablero[1][1] == Jugador && tablero[2][0] == Jugador){
        VecesGanadas(Jugador)
        alert('El Ganador fue Player '+Jugador)
        end()
    }
    
    
}

function Empate($btn){
    temp = false
    count = 0;
    for(let i=0;i<tablero.length;i++){
        for(let j=0;j<tablero.length;j++){
            if(tablero[i][j] != 0){
                count++
                if(count == 9)
                {
                    temp =true
                }
            }
            if(temp == true){
                alert('Empate');
                
                end()
            }
        }
    }
}


function gBtn_click(e) {  
    //alert(Vs)
    const $btn = $(this)
    const r = $btn.data('r')
    const c = $btn.data('c')
    let Jugador = 0;
    if(tablero[r][c] == 0){ 
    console.log(`R = ${r}  &  C = ${c}`)
    if(Vs == 1){
        if(Turno){
            Puntos += 5
            Player($btn,r,c)
            Jugador = 1
            printScore(r,c)
            Turno=false
        }else{
            PuntosPC += 5
            Equipo($btn,r,c)
            Jugador = 2
            Turno=true;
            printScorePC(r,c)
        }
    }else{
    alert("Compu no Disponible")
    Vs = 1
    }

    printTablero()
    Ganador(Jugador,$btn)
    }
    Empate($btn)

}

function printTablero() {
    for (const r of tablero) {
        console.log(`${r[0]}  ${r[1]}  ${r[2]}`)
        console.log(`Puntos | ${Puntos}`)
    }
}

function crearSaludador(saludo){
    saludo += ' '
    function saludador(nombre){
        console.log(saludo + nombre)
    }
    return saludador;
}

function crearContador(incremento){
    let cuenta = 0

    function contador(){
        cuenta += incremento
    }
    return contador
}