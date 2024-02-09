-- related to: https://github.com/arkenidar/knex-test
-- successively: https://github.com/arkenidar/web--back-end

-- mysql (mariadb)
-- pamac install mysql # chosen: mariadb

-- pamac install mysql-workbench

-- sudo mariadb -p # mysql's root password after sudo
-- ALTER USER 'root'@'localhost' IDENTIFIED BY 'password'; -- set password

create database knex_test;
use knex_test;
create table newtable ( column1 text, column2 text );

insert into newtable (column1,column2)
values ("example column 1","example column 2");

INSERT INTO `knex_test`.`newtable`
(`column1`,
`column2`)
VALUES
("mariadb as mysql",
"in manjaro arch linux");

CREATE TABLE knex_test.newtable (
    column1 text,
    column2 text
);

-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
