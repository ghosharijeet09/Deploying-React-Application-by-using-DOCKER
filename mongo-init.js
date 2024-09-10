db.createUser({
    user: "root",
    pwd: "password",
    roles: [
      {
        role: "readWrite",
        db: "admin"
      }
    ]
});

db = db.getSiblingDB('task-manager');
db.createCollection('tasks');
