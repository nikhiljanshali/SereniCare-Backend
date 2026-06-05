import express from "express";
import cors from "cors";
import connectDB from "./database-connect.js";

/**
 * Routes
 */
import authRouter from "./routes/authentication.route.js";
import doctorsRouter from "./routes/doctors.router.js";
import patientRouter from "./routes/patient.route.js";
import clinicRouter from "./routes/clinic.route.js";
import clinicTypeRouter from "./routes/clinic-type.router.js";
import specialityRouter from "./routes/speciality.route.js";
import roleRouter from "./routes/role.route.js";
import meshTableRouter from "./routes/meshtable.route.js";
import bloodGroupRouter from "./routes/bloodgroup.route.js";
import primaryConditionRouter from "./routes/primarycondition.route.js";
import allergiesRouter from "./routes/allergies.router.js";
import appointmentBookingRouter from "./routes/appointmentBooking.route.js";

const app = express();
const PORT = process.env.PORT || 5000;
const middlePoint = "/api/v1";

/** Middleware */
app.use(cors());
app.use(express.json());

app.use(`${middlePoint}/authentication`, authRouter);
app.use(`${middlePoint}/patients`, patientRouter);
app.use(`${middlePoint}/doctors`, doctorsRouter);
app.use(`${middlePoint}/clinics`, clinicRouter);
app.use(`${middlePoint}/clinictype`, clinicTypeRouter);
app.use(`${middlePoint}/speciality`, specialityRouter);
app.use(`${middlePoint}/role`, roleRouter);
app.use(`${middlePoint}/meshTable`, meshTableRouter);
app.use(`${middlePoint}/bloodGroup`, bloodGroupRouter);
app.use(`${middlePoint}/primaryCondition`, primaryConditionRouter);
app.use(`${middlePoint}/allergies`, allergiesRouter);
app.use(`${middlePoint}/appointmentBookings`, appointmentBookingRouter);

// Connect to database before starting the server
let dbConnected = false;

connectDB()
  .then(() => {
    dbConnected = true;
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  if (dbConnected) {
    console.log("Database connection established");
  } else {
    console.warn("Warning: Database connection not yet established");
  }
});
