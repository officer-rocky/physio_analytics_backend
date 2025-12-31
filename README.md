# Physio Analytics Backend

## Overview
This project provides the base backend structure for a Physiotherapy Analytics system.  
It is designed to store patient details and physiotherapy session data, enabling future analytics such as recovery tracking, pain-level trends, and exercise performance analysis.

---

## Tech Stack
- Node.js
- Express.js
- PostgreSQL
- Nodemon
- REST APIs

---

## Features
- Backend base structure for physiotherapy analytics
- PostgreSQL database for persistent storage
- APIs to manage patients and physiotherapy sessions
- Analytics-ready database schema
- Scalable and modular architecture

---

## Database Schema

### Patients Table
- id
- name
- age
- condition
- created_at

### Physio Sessions Table
- id
- patient_id (foreign key)
- exercise_name
- duration_minutes
- repetitions
- pain_level
- session_date
- created_at

---

## API Endpoints

### Patients
- `GET /api/patients` – Fetch all patients
- `POST /api/patients` – Add a new patient

### Physio Sessions
- `GET /api/sessions` – Fetch all physiotherapy sessions
- `POST /api/sessions` – Add a new session record

---

## How This Supports Analytics
The backend stores structured physiotherapy data that can be used to:
- Track patient recovery over time
- Analyze pain level trends
- Measure exercise effectiveness
- Build dashboards and reports in the future

---

## How to Run the Project

1. Install dependencies:
```bash
npm install
```
2. Create a PostgreSQL database:
```bash
CREATE DATABASE physio_analytics;
```
3. Create tables (patients and physio_sessions)
4. Start the server:
```bash
npm run dev
```
Server runs at:
http://localhost:5000
