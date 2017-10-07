FROM node:alpine
EXPOSE 3000

# Create app directory
RUN mkdir -p /usr/src/linqu
WORKDIR /usr/src/linqu
 
# Install app dependencies
COPY . /usr/src/linqu

#npm install with python installed
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps
  
CMD [ "npm", "start" ]