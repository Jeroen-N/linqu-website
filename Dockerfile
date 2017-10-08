FROM node:alpine
EXPOSE 3000

#Copy App
COPY . .

#npm install with python installed and remove python after install
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps
  
CMD [ "npm", "start" ]