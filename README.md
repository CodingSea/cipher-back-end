# cipher-back-end

# API Routes

## User Routes

| Method | Path          | Description            |
|--------|---------------|------------------------|
| POST   | `/user/new`        | Create new user        |
| PUT    | `/user/:id`  | Update user by ID      |
| GET    | `/user`      | Get all users          |
| GET    | `/user/:id`  | Get single user by ID  |

## DM (Direct Message) Routes

| Method | Path        | Description            |
|--------|-------------|------------------------|
| POST   | `/dm/new`   | Create new DM          |
| GET    | `/dm/:id`  | Get DM by ID           |
| GET    | `/`      | Get all DMs            |

## Message Routes

| Method | Path            | Description                  |
|--------|-----------------|------------------------------|
| POST   | `/message/newMessage`   | Create new message           |
| PUT    | `/message/:id` | Update message by ID         |
| GET    | `/message`     | Get all messages             |
| GET    | `/message/:id` | Get single message by ID     |
| DELETE | `/message/:id` | Delete message by ID         |
