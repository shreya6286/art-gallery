create table user_accounts
(
    _id integer primary key auto_increment,
    first_name varchar(20),
    last_name varchar(20),
    phone varchar(10),
    email_id varchar(50),
    password varchar(20)
);

create table user_consignments
(
    _id integer primary key auto_increment,
    artist_name varchar(30),
    title varchar(100),
    materials varchar(100),
    art_year integer(4),
    rarity varchar(30),
    provenance varchar(100),
    medium varchar(50),
    height integer,
    width integer,
    depth integer,
    photo longtext,
    price integer(10xx)
);

create table user_messages
(
    _id integer primary key auto_increment,
    person_name varchar(40),
    phone varchar(10),
    email_id varchar(50),
    message text
);

