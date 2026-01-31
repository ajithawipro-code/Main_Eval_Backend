### Table Name - Vehicles

Fields:

id uuid PK,
name text not null,
registration_number text not null unique
allowed_passengers int
isAvailable boolean default true
owner_id uuid FK references Owner(id)
driver_id uuid NULL
rate_per_km int
created_at timestamptz