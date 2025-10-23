# ---------- Build Stage ----------
FROM node:20-alpine AS build

WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the source code
COPY . .

# Build the optimized Vite production build
RUN npm run build

# ---------- Serve Stage ----------
FROM nginx:alpine

# Copy built frontend files to Nginx's default public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for public access
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
