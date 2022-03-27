FROM node:latest
EXPOSE 3000

ENV APP_HOME /home/app
RUN mkdir -p $APP_HOME
ADD . $APP_HOME
WORKDIR $APP_HOME
CMD ["npm", "run", "dev"]
