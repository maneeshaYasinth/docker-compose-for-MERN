# Use a lightweight Node.js image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only package files first (for better caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy all backend code
COPY . .

# Expose backend port
EXPOSE 5000

# Start the app (make sure package.json has "start": "node server.js" or similar)
CMD ["npm", "start"]
