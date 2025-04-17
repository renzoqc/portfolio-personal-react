FROM node:18.16

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Crea el .env dinámicamente con valores pasados por build args
ARG REACT_APP_GA_ID
RUN echo "REACT_APP_GA_ID=$REACT_APP_GA_ID" > .env

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
