# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /app

# Add the source code to app
COPY . .

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build --prod


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/tdd-test .

ENTRYPOINT ["nginx", "-g", "daemon off;"]

# Expose port 80
# EXPOSE 80


# docker build -t 1306110078/to-do-list  .
# docker run -d -p 8080:80 1306110078/to-do-list
