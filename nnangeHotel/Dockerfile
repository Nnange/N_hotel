# Use Maven with OpenJDK 21 as the base image for building
FROM maven:3.8.8-openjdk-17 as build

# Set the working directory
WORKDIR /target

# Copy the Maven project files
COPY pom.xml .
COPY src ./src

# Build the project
RUN mvn clean package -DskipTests

# Use a lightweight JDK 21 runtime for the application
FROM eclipse-temurin:21-jre

# Set the working directory in the runtime image
WORKDIR /target

# Copy the built JAR file from the build stage
COPY --from=build /target/*.jar app.jar

# Set the entry point for the container
ENTRYPOINT ["java", "-jar", "app.jar"]

