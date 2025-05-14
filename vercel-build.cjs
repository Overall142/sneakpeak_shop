const fs = require('fs');
const path = require('path');

// Caminho para o arquivo index.html
const indexPath = path.join(__dirname, 'index.html');

try {
  // Verificar se o arquivo existe
  if (fs.existsSync(indexPath)) {
    // Ler o conteúdo do arquivo
    let content = fs.readFileSync(indexPath, 'utf8');
    
    // Verificar se o conteúdo está correto
    if (!content.includes('src="/src/main.tsx"')) {
      // Atualizar para usar caminho absoluto
      content = content.replace(/src="\.?\/src\/main\.tsx"/, 'src="/src/main.tsx"');
      
      // Escrever o conteúdo modificado de volta no arquivo
      fs.writeFileSync(indexPath, content, 'utf8');
      console.log('Arquivo index.html atualizado para usar caminho absoluto');
    } else {
      console.log('index.html já está usando o caminho correto: /src/main.tsx');
    }
    
    // Exibir o conteúdo final
    console.log('Conteúdo final do index.html:');
    console.log(content);
  } else {
    console.error('Arquivo index.html não encontrado em:', indexPath);
  }
} catch (error) {
  console.error('Erro ao processar o arquivo index.html:', error);
} 