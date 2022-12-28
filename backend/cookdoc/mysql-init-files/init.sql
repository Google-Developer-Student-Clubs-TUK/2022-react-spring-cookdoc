drop table if exists users;

create table users (
   user_id bigint not null,
   created_at datetime(6),
   is_deleted boolean default false,
   updated_at datetime(6),
   address varchar(255),
   email varchar(255),
   name varchar(255),
   password varchar(255),
   primary key (user_id)
) engine=InnoDB;

insert into users (user_id, address, email, name, password)
values (1, "한국공학대학교", "abc@naver.com", "홍길동", "1234");
