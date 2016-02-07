CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT PRIMARY KEY auto_increment,
  body varchar(120),
  roomName varchar(30),
  userName varchar(30)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INT PRIMARY KEY auto_increment,
  userName varchar(30)
);

CREATE TABLE rooms (
  id INT PRIMARY KEY auto_increment,
  roomName varchar (30)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
