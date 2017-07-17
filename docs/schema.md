# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## campaigns
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
archived    | boolean   | not null, default: false

## products
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
seller_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |
