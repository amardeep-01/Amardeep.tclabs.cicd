FROM node:latest
RUN npm install -g @angular/cli
WORKDIR /src/app
COPY package*.json ./
RUN npm install -f
COPY . .
EXPOSE 4200  
CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]
