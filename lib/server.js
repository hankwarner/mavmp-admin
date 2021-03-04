if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
  }
  
  const express = require('express');
  const bodyParser = require('body-parser');
  const cors = require('cors');
  const path = require('path');
  
  // Routers
  const employeeRouter = require('./routes/EmployeeRoutes');
  const companyRouter = require('./routes/CompanyRoutes');
  const testimonialRouter = require('./routes/TestimonialRoutes');
  const emailRouter = require('./routes/EmailRoutes');
  const authRouter = require('./routes/AuthenticationRoutes');
  
  const app = express();
  const port = process.env.PORT || 8081;

  var corsOptions = { origin: "*" };
  
  app.use(bodyParser.json());
  app.use(cors(corsOptions));
  
  // Serve the compiled index.html file from the client
  app.use(express.static(path.join(__dirname, '../dist/')));
  
  app.get('/', (res, req, next) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
  });
  
  app.use('/api/employee', employeeRouter);
  app.use('/api/company', companyRouter);
  app.use('/api/testimonial', testimonialRouter);
  app.use('/api/email', emailRouter);
  app.use('/api/authentication', authRouter);
  
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
  