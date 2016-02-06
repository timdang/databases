CREATE DATABASE chat;

USE chat;


CREATE TABLE messages (body varchar(120), room varchar(30), USER varchar(30) /* Describe your table here.*/ );

/* Create other tables and define schemas for them here! */
CREATE TABLE users (name varchar(30));

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
