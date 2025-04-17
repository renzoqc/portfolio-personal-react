FROM node:18.16

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Receive GA_ID as build args
ARG REACT_APP_GA_ID
ENV REACT_APP_GA_ID=${REACT_APP_GA_ID}

# Echo env vars into .env before build
RUN echo "REACT_APP_GA_ID=$REACT_APP_GA_ID" > .env

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
