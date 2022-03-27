FROM openjdk:8-jdk-alpine
ENV APP_HOME=/home/app
RUN mkdir -p $APP_HOME
EXPOSE 3000
COPY build/libs/demo-0.0.1-SNAPSHOT.jar $APP_HOME/app.jar
WORKDIR $APP_HOME
ENTRYPOINT ["java","-jar","./app.jar"]

