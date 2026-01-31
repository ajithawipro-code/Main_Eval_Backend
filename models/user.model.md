### Table Name - Owner_12

Fields:

id uuid PK
name text not null
email text not null unique
password text not null
role text not null (owner or customer or driver)
created_at timestamptz





