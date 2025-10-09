#use the base image for node
FROM node:23.10.0

#Set the working directory inside the container
WORKDIR /app

#copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

#install the dependencies
RUN npm install

#copy the rest of the application code to the working directory
COPY . .

#Expose the port that the application will run on
EXPOSE 5173

#Start the application
CMD ["npm","run","dev"]