FROM node:alpine
EXPOSE 3000

#install git
RUN apk update && apk upgrade && \
    apk add --no-cache bash git

#pull from git
RUN git clone https://1b60a6788749a41a3ff77864329af7b31b44d403@github.com/Jeroen-N/linqu-website.git

#workdir
WORKDIR linqu-website

#npm install with python installed
RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps

#Run the site
CMD [ "npm" , "start" ]

