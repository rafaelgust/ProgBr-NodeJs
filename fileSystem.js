let fs = require('fs');

//O fs.readFile()método é usado para ler arquivos em seu computador.
	fs.readFile('test.txt', 'UTF8', function(err, data) {
		 if (err) throw err;
	   console.log(data)
  });

//O fs.appendFile() 
	fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
	  if (err) throw err;
	  console.log('Saved!');
	});
	//método anexa o conteúdo especificado a um arquivo. Se o arquivo não existir, o arquivo será criado

//O fs.open()
	fs.open('mynewfile2.txt', 'w', function (err, file) {
	  if (err) throw err;
	  console.log('Saved!');
	});
	//método recebe um "sinalizador" como segundo argumento, se o sinalizador for "w" para "gravação", o arquivo especificado será aberto para gravação. Se o arquivo não existir, um arquivo vazio será criado

//O fs.writeFile()
	fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
	  if (err) throw err;
	  console.log('Saved!');
	});
	//método substitui o arquivo e o conteúdo especificados, se existir. Se o arquivo não existir, um novo arquivo, contendo o conteúdo especificado, será criado


//O fs.unlink() método exclui o arquivo especificado:
	fs.unlink('mynewfile2.txt', function (err) {
	  if (err) throw err;
	  console.log('File deleted!');
	});
//O fs.rename()método renomeia o arquivo especificado:
	fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
	  if (err) throw err;
	  console.log('File Renamed!');
	});