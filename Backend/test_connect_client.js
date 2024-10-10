const {Client} = require("pg");

// สร้าง Client สำหรับเชื่อมต่อฐานข้อมูล
const client = new Client({
  user: "postgres", // ใส่ชื่อผู้ใช้ที่เชื่อมต่อฐานข้อมูล
  host: "127.0.0.1", // หรือ IP ที่ใช้ในการเชื่อมต่อ
  database: "Web-Blog-DB", // ชื่อฐานข้อมูล
  password: "postgres", // รหัสผ่าน
  port: 5432, // พอร์ต (ค่าพื้นฐานสำหรับ PostgreSQL คือ 5432)
});

// เชื่อมต่อฐานข้อมูล
client
  .connect()
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.error("Connection error", err.stack));

// ตัวอย่างการดึงข้อมูลจากตาราง users
const query = "SELECT * FROM public.user";

client
  .query(query)
  .then((res) => {
    console.log("Data retrieved:");
    res.rows.forEach((row) => {
      console.log(row); // แสดงข้อมูลแต่ละแถว
    });
  })
  .catch((err) => {
    console.error("Query error", err.stack); //แสดง erorr
  })
  .finally(() => {
    client.end(); // ปิดการเชื่อมต่อเมื่อเสร็จสิ้น
  });
