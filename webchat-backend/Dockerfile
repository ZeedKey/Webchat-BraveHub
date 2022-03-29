FROM node:10-alpine AS builder
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM node:10-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3333 3333
CMD ["npm", "run", "start"]