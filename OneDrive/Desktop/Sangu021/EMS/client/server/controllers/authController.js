exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    db.query(
      "SELECT * FROM admins WHERE email = ?",
      [email],
      async (err, result) => {
        if (err) return res.status(500).json(err);

        if (result.length > 0) {
          return res.status(400).json({
            message: "Admin already exists",
          });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        db.query(
          "INSERT INTO admins(name, email, password) VALUES (?, ?, ?)",
          [name, email, hashedPassword],
          (err) => {
            if (err) return res.status(500).json(err);

            res.status(201).json({
              success: true,
              message: "Admin Registered Successfully",
            });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
};
exports.register = async (req, res) => {
   // your registration code
};

exports.login = async (req, res) => {
   // your login code
};