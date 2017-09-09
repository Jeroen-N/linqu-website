FROM node:6
EXPOSE 3000

#install git
RUN sudo apt-get update -y && sudo apt-get upgrade -y 
RUN sudo apt-get install git

#pull from git
RUN git clone https://a1ade20a219cd09d370b339b9ce403f883caef1c@github.com/Update94/repo.git

#npm install 
RUN npm install

#Run the site
RUN npm start

