 FROM node:latest
 ENV APP_HOME /home/app
 RUN mkdir -p $APP_HOME
 WORKDIR $APP_HOME
 ADD . $APP_HOME
 EXPOSE 3000
 CMD ["/bin/www"]
