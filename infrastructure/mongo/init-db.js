const dbName = process.env.MONGO_INITDB_DATABASE || "stack_track";
const db = db.getSiblingDB(dbName);

db.createCollection('users');
db.createCollection('modules');
db.createCollection('progress');

db.users.createIndex({username: 1}, {unique: true});
db.progress.createIndex({ "userId": 1});

db.users.insertOne({
    username: "admin",
    name: "John",
    password: "$2a$12$sbwY.xjo8wiSLEdvIsLX8e5H4o3f/ojrkXn8mlHlu7Ybr9t6Dnxoi",
    role: "admin",
    createdAt: new Date()
})

db.modules.insertOne({
    name: "Getting Started",
    description: "Introduction to stack track",
    order: 1,
    challenges: [
        {id: "intro-1", name: "Your first exercise" }
    ]
});

print("Database initialization completed")