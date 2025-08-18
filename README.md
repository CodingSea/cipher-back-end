# cipher-back-end

## API Routes

### baseUrl: "http://localhost:3000"

### /user

| Method | Path          | Description            |
|--------|---------------|------------------------|
| POST   | `/new`        | Create new user        |
| GET    | `/`      | Get all users          |
| GET    | `/:id`  | Get single user by ID  |
| PUT    | `/:id`  | Update user by ID      |

### /dm

| Method | Path        | Description            |
|--------|-------------|------------------------|
| POST   | `/new`   | Create new DM          |
| GET    | `/`      | Get all DMs            |
| GET    | `/:id`  | Get DM by ID           |

### /message

| Method | Path            | Description                  |
|--------|-----------------|------------------------------|
| POST   | `/new`   | Create new message           |
| GET    | `/`     | Get all messages             |
| PUT    | `/:id` | Update message by ID         |
| GET    | `/:id` | Get single message by ID     |
| DELETE | `/:id` | Delete message by ID         |

### /server

| Method | Path            | Description                  |
|--------|-----------------|------------------------------|
| POST   | `/new`   | Create new server           |
| GET    | `/`     | Get all servers             |
| PUT    | `/:id` | Update server by ID         |
| GET    | `/:id` | Get single server by ID    |
| DELETE | `/:id` | Delete server by ID      |

### /server

| Method | Path            | Description                  |
|--------|-----------------|------------------------------|
| POST   | `/new`   | Create new server           |
| GET    | `/`     | Get all servers             |
| PUT    | `/:id` | Update server by ID         |
| GET    | `/:id` | Get single server by ID    |
| DELETE | `/:id` | Delete server by ID      |
