### Table Name - Customers_12

Fields:

id uuid PK,
customer_id uuid,
vehicle_id FK references vehicles(id)
start_date 
end_date
location text not null
distance_km int
passengers int
tripCost int
isCompleted boolean default false
created_at timestamp


