//variável que verificará se o mouse está sobre a imagem
let hover = false;

//Função que moverá a imagem
function move(element) {
  //Muda as propriedades top e left da imagem
  element.style.top = `${Math.random() * (150 - (-150)) + (-150) + Number(element.style.top.replace('px', ''))}px`;
  element.style.left = `${Math.random() * (150 - (-150)) + (-150) + Number(element.style.left.replace('px', ''))}px`;
  
  //Math.random() * (10 - (-10)) + (-10)
  //Número aleatório entre -10 e 10
  
  //Number(element.style.top/left.replace('px', ''))
  //A posição atual da propriedade top/left como um número

  //Se o mouse ainda está sobre a imagem
  if (hover) {
    //Chama a função move novamente em meio segundo
    setTimeout(() => move(element), 500);
  }
}

//O elemento imagem
const image = document.querySelector('img');

//Quando o mouse ficar sobre a imagem
image.addEventListener('mouseover', function(event) {
  //Altera a variável hover
  hover = true;

  //Move a imagem
  move(image);
});

//Quando o mouse sair da imagem
image.addEventListener('mouseout', function(event) {
  //Altera a variável hover
  hover = false;
});