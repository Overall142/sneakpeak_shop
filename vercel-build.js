const fs = require('fs');
const path = require('path');

// Caminho para o arquivo index.html
const indexPath = path.join(__dirname, 'index.html');

try {
  // Verificar se o arquivo existe
  if (fs.existsSync(indexPath)) {
    // Ler o conteúdo do arquivo
    let content = fs.readFileSync(indexPath, 'utf8');
    
    // Verificar qual padrão está presente e substituir
    if (content.includes('src="/src/main.tsx"')) {
      content = content.replace('src="/src/main.tsx"', 'src="./src/main.tsx"');
      console.log('Substituiu /src/main.tsx por ./src/main.tsx');
    } else if (content.includes('src="src/main.tsx"')) {
      content = content.replace('src="src/main.tsx"', 'src="./src/main.tsx"');
      console.log('Substituiu src/main.tsx por ./src/main.tsx');
    } else {
      console.log('Não encontrou o padrão para substituir em index.html');
      console.log('Conteúdo atual:', content);
    }
    
    // Escrever o conteúdo modificado de volta no arquivo
    fs.writeFileSync(indexPath, content, 'utf8');
    console.log('Arquivo index.html atualizado com sucesso');
    
    // Exibir o conteúdo final
    console.log('Conteúdo final do index.html:');
    console.log(content);
  } else {
    console.error('Arquivo index.html não encontrado em:', indexPath);
  }
} catch (error) {
  console.error('Erro ao processar o arquivo index.html:', error);
} 