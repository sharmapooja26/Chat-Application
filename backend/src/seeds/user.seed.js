import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";


config();

const seedUsers = [
  
  {
    email: "sophia.anderson@example.com",
    fullName: "Sophia Anderson",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "emma.taylor@example.com",
    fullName: "Emma Taylor",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    email: "olivia.harris@example.com",
    fullName: "Olivia Harris",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    email: "ava.roberts@example.com",
    fullName: "Ava Roberts",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    email: "mia.evans@example.com",
    fullName: "Mia Evans",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    email: "isabella.morris@example.com",
    fullName: "Isabella Morris",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    email: "charlotte.lee@example.com",
    fullName: "Charlotte Lee",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    email: "amelia.white@example.com",
    fullName: "Amelia White",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
  },

  {
    email: "liam.baker@example.com",
    fullName: "Liam Baker",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    email: "noah.hall@example.com",
    fullName: "Noah Hall",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    email: "william.adams@example.com",
    fullName: "William Adams",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    email: "james.carter@example.com",
    fullName: "James Carter",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    email: "benjamin.mitchell@example.com",
    fullName: "Benjamin Mitchell",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    email: "lucas.reed@example.com",
    fullName: "Lucas Reed",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    email: "henry.scott@example.com",
    fullName: "Henry Scott",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();
    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
