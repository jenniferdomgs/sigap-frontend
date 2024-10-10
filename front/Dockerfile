# Escolhe a imagem do Node como base
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia o arquivo de dependências para o container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação
COPY . .

# Compila o projeto
RUN npm run build

# Exposição da porta
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
