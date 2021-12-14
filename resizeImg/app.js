const sharp = require('sharp');

let path = process.argv[2]; // pegar img
let width = Number(process.argv[3]); //tamanho

function resize(path, width){
    sharp(path).resize({ width: width })
        .toFile('./temp/output_resize.jpg', (err) => {
        err ? console.log(err) : console.log('Imagem Redimensionada');
    });
}

resize(path, width);