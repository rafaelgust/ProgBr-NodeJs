const sharp = require('sharp');
const compress_images = require('compress-images');

let path = process.argv[2]; // pegar img
let width = Number(process.argv[3]); //tamanho

function resize(path, width){
    
    sharp(path)
        .resize({width: width})
        .toFile('./outputSize.png', (err, info) => {
            err ? console.log(err) : console.log(info);
        });
}

resize(path, width);

function compress(pathInput, outputPath){
    compress_images(pathInput, outputPath, { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
        function (error, completed, statistic) {
            console.log("-------------");
            console.log(error);
            console.log(completed);
            console.log(statistic);
            console.log("-------------");
        }
    );
}

//compress(path, "./compressed");


