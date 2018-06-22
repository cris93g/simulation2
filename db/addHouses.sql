INSERT INTO houses
    (property_name, adress, price, state,zip)
VALUES
    ($1, $2, $3, $4, $5)
returning *;
