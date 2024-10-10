exports.homepage = async (req, res) => {
  try {
    res.json({
      status: "success",
      message: "How are you today",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};
