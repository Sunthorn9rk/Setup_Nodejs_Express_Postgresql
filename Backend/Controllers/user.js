const pool = require("../Config/db");
const bcrypt = require("bcrypt");

exports.listuser = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM public.user");
    res.status(200).json({
      status: "success",
      data: result.rows,
    });
  } catch (err) {
    console.log("Error fetching data", err);
    res.status(500).json({
      status: "error",
      message: "Error fetching data",
    });
  }
};

exports.createuser = async (req, res) => {
  try {
    const {username, email, password} = req.body;

    // 1. ตรวจสอบว่าผู้ใช้มีอยู่ในฐานข้อมูลแล้วหรือไม่
    const {rowCount} = await pool.query(
      "SELECT * FROM public.user WHERE email = $1",
      [email]
    );

    if (rowCount > 0) {
      return res.status(400).send("User Already Exists!!");
    }

    // 2. สร้าง salt เพื่อ encrypt รหัสผ่าน
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. บันทึกข้อมูลผู้ใช้ลงในฐานข้อมูล
    await pool.query(
      `INSERT INTO public."user" (username, email, password)
       VALUES ($1, $2, $3)`,
      [username, email, hashedPassword]
    );

    res.status(201).send("Register Success!!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

// INSERT INTO public."user"(
// 	"userID", username, email, password, "Bio", "profilePicture")
// 	VALUES (?, ?, ?, ?, ?, ?);
