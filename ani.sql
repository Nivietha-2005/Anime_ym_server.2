create database anime_db;
use anime_db;

create table anime(id int auto_increment primary key, name varchar(30), email varchar(50)unique, password varchar(20));
select * from anime;
desc anime;
