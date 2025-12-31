const pool = require("../db");

/* ================= PATIENTS ================= */

// Add patient
exports.addPatient = async (req, res) => {
  const { name, age, condition } = req.body;

  await pool.query(
    "INSERT INTO patients (name, age, condition) VALUES ($1,$2,$3)",
    [name, age, condition]
  );

  res.status(201).json({ message: "Patient added successfully" });
};

// Get all patients
exports.getPatients = async (req, res) => {
  const result = await pool.query("SELECT * FROM patients ORDER BY id DESC");
  res.json(result.rows);
};

/* ================= SESSIONS ================= */

// Add physio session
exports.addSession = async (req, res) => {
  const {
    patient_id,
    exercise_name,
    duration_minutes,
    repetitions,
    pain_level,
    session_date,
  } = req.body;

  await pool.query(
    `INSERT INTO physio_sessions
     (patient_id, exercise_name, duration_minutes, repetitions, pain_level, session_date)
     VALUES ($1,$2,$3,$4,$5,$6)`,
    [
      patient_id,
      exercise_name,
      duration_minutes,
      repetitions,
      pain_level,
      session_date,
    ]
  );

  res.status(201).json({ message: "Session recorded successfully" });
};

// Get all sessions
exports.getSessions = async (req, res) => {
  const result = await pool.query(
    `SELECT ps.*, p.name AS patient_name
     FROM physio_sessions ps
     JOIN patients p ON ps.patient_id = p.id
     ORDER BY ps.created_at DESC`
  );

  res.json(result.rows);
};
