const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
/*to pegando a imagem do mario */

const jump = () => {
    mario.classList.add('jump');
    /*a função jump vai acrescentar  no mario*/
    setTimeout(() =>{

        mario.classList.remove('jump');
        /*com isso vai pressionar a tecla, a animação vai acontecer, e quano terminar eu vou remover para poder adicionar novamente */
    } ,500);
}

const loop = setInterval(() =>{



    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0  && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        pipe.style.animation = 'none';
        pipe.style.bottom = `${marioPosition}px`;

        mario.src = '/imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        /*adicionei uma imagem diferente para quando o mario bate */

        clearInterval(loop); //parano o loop quando o mario bate
    }
}, 10);

document.addEventListener('keydown', jump)/*keydown: quando pressionar a tecla executa a função jump*/

/*

1. `const mario = document.querySelector('.mario');`
   - Aqui, um elemento HTML com a classe CSS "mario" está sendo selecionado e armazenado na variável `mario`.

2. `const pipe = document.querySelector('.pipe');`
   - Similarmente, um elemento com a classe "pipe" está sendo selecionado e armazenado na variável `pipe`.

3. `const jump = () => { ... }`
   - Uma função chamada "jump" é definida. Esta função adiciona a classe "jump" ao elemento mario, dando a ele uma animação de pulo. Em seguida, aguarda 500 milissegundos usando `setTimeout`, e remove a classe "jump", revertendo o efeito de pulo.

4. `const loop = setInterval(() => { ... }, 10);`
   - Um loop é iniciado usando `setInterval`. A cada 10 milissegundos, o código dentro da função de callback será executado.

5. Dentro do loop:
   - `const pipePosition = pipe.offsetLeft;`: Obtém a posição horizontal (em pixels a partir do canto esquerdo do elemento pai) do elemento com a classe "pipe".
   - `const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');`: Obtém a posição vertical (em pixels a partir do canto inferior do elemento pai) do elemento com a classe "mario".
   - `if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) { ... }`: Verifica se o "mario" colidiu com o "pipe". Se a posição horizontal do "pipe" estiver entre 0 e 120 pixels (o que sugere uma colisão) e a posição vertical do "mario" for inferior a 80 pixels (indicando que o "mario" está próximo o suficiente para colidir), então uma série de ações é executada:
      - Desativa a animação do "pipe".
      - Define a posição do "pipe" e do "mario" nas mesmas posições.
      - Muda a imagem do "mario" para uma imagem de game over e ajusta o tamanho e a posição da imagem.
      - Para o loop usando `clearInterval`, interrompendo assim a execução contínua do código.

6. `document.addEventListener('keydown', jump)`
   - Adiciona um ouvinte de evento ao documento. Quando uma tecla é pressionada, a função "jump" é chamada.

Essencialmente, este código cria um jogo onde o jogador controla o "mario" para pular, e se o "mario" colidir com o "pipe", a imagem do "mario" muda para indicar o fim do jogo. */