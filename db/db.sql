-- Active: 1741143353205@@127.0.0.1@5432@to-do-list@public
create table user_project(
    email VARCHAR (20) PRIMARY KEY,
    name text,
    password TEXT
);
select * from user_project;
create table task(
id SERIAL PRIMARY KEY,
title VARCHAR,
description text,
status text check (status in('pending','in progress')) default 'pending',
due_date date,
email varchar(20) REFERENCES user_project(email)
);
select * from task;
select * from user_project;
select * from task

