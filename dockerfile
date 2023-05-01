# Base image
FROM node:20.0

# Set working directory
WORKDIR /diplomint

# Copy package.json and package-lock.json to workdir
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the container
COPY . .

# Build the app
RUN npm run build

# Set environment variables
ENV NODE_ENV production
ENV PORT 3000

# Expose the app's port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start"]