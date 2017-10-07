FROM node:alpine
EXPOSE 3000

# Create app directory
RUN mkdir -p /usr/src/linqu
WORKDIR /usr/src/linqu
 
# Install app dependencies
COPY . /usr/src/linqu
RUN npm install
  
CMD [ "npm", "start" ]