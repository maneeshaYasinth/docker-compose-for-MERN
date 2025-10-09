# Use the base image for node
FROM node:20-alpine

# Install nodemon globally
RUN npm install -g nodemon

# Set the working directory inside the container
WORKDIR /app

#copy all files to the working directory
COPY . .

# Install the dependencies
RUN npm install

# Expose the port that the application will run on
EXPOSE 5000

# Start the application
CMD ["npm","run","dev"]