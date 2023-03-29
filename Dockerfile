# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g vite

# Copy the rest of the application code to the working directory
COPY . .

# Build the production version of the application
RUN vite build

# Expose port 3000 for the application
EXPOSE 3000

# Run the application when the container starts
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]