# Como adicionar sua foto no perfil

Para adicionar sua foto pessoal na página "Sobre Mim":

1. **Prepare sua foto:**
   - Formato: JPG, PNG ou WEBP
   - Tamanho recomendado: 300x300 pixels (quadrada)
   - Nome do arquivo: `avatar-julia.jpg`

2. **Coloque a foto na pasta correta:**
   - Copie sua foto para: `public/images/avatar-julia.jpg`
   - Substitua a extensão se necessário (`.png`, `.webp`)

3. **Se usar extensão diferente:**
   - Abra o arquivo: `src/app/sobre-mim/page.jsx`
   - Na linha do `src="/images/avatar-julia.jpg"`
   - Altere para a extensão correta da sua foto

4. **Teste:**
   - Recarregue a página
   - Sua foto aparecerá no lugar da letra "J"
   - Se houver erro, a letra "J" aparecerá como fallback

**Dica:** Use uma foto com boa iluminação e fundo neutro para melhor resultado visual.
