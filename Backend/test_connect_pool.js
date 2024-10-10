require("dotenv").config({path: `${process.cwd()}/.env`});

const {Pool, Client} = require("pg");

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

// สร้างฟังก์ชัน asynchronous เพื่อดึงข้อมูลจากฐานข้อมูล
const fetchData = async () => {
  try {
    const res = await pool.query("SELECT * FROM public.user");
    console.log("Data retrieved:", res.rows);
  } catch (err) {
    console.error("Error fetching products", err);
  }
};

// เรียกใช้ฟังก์ชัน
fetchData();
