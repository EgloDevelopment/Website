FROM node:16

RUN echo "Selected NodeJS 16"

# Create app directory
WORKDIR /usr/src/app

RUN echo "Selected WORKDIR"

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN echo "Copied package*.json"

RUN npm install

RUN echo "Installing dependencies"

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN echo "Bundling app source"

CMD [ "npm", "run", "dev" ]