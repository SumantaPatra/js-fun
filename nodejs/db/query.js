const userTableQuery = `
   CREATE TABLE IF NOT EXISTS users(
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) NOT NULL UNIQUE,
      email VARCHAR(100) NOT NULL UNIQUE,
      password VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   )
`
const insertQuery = `
INSERT INTO users (username, email, password)
VALUES ($1, $2, $3)
RETURNING *;
`;

const getuserByid = `
select * from users 
where id = userId
`

module.exports={userTableQuery,insertQuery}