# Use Node.js official image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy app source
COPY . .

# Expose port
EXPOSE 3000

# Run app
CMD [ "npm", "start" ]
