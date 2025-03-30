FROM node:20.0.0

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN useradd -s /bin/bash -m user && chown -R user /app

USER user

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]