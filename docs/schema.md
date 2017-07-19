# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
last_name       | string    | not null
first_name      | string    | not null
image_url       | string    | default
bio             | text      | not null
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## campaigns
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
goal        | integer   | not null
body        | text      | not null
image_url   | string    | default
creator_id  | integer   | not null, foreign key (references users), indexed
category_id | integer   | not null, foreign key (references users), indexed
archived    | boolean   | not null, default: false

## perks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
campaign_id | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |
price       | integer   | not null
image_url   | string    | default

## contributions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
campaign_id | integer   | not null, foreign key (references campaigns), indexed
amount      | integer   | not null

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
