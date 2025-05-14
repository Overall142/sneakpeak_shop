const fs = require('fs');
const path = require('path');

// Função para modificar o arquivo index.html antes do build
function modifyIndexHtml() {
  const indexPath = path.resolve(__dirname, 'index.html');
  
  if (fs.existsSync(indexPath)) {
    // Ler o conteúdo atual do arquivo
    let content = fs.readFileSync(indexPath, 'utf8');
    
    // Substituir qualquer referência de "/src/main.tsx" por "./src/main.tsx"
    content = content.replace(/src="\/src\/main\.tsx"/g, 'src="./src/main.tsx"');
    
    // Escrever o conteúdo de volta no arquivo
    fs.writeFileSync(indexPath, content, 'utf8');
    
    console.log('index.html modificado com sucesso.');
  } else {
    console.error('index.html não encontrado!');
  }
}

// Executar a modificação
modifyIndexHtml(); 