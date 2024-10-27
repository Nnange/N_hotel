# React Dockerfile
FROM node:14-alpine as build
WORKDIR /dist
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Nginx for serving the app
FROM nginx:alpine
COPY --from=build /dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
