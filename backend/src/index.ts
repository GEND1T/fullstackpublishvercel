import express from 'express';	
import cors from 'cors';

import eventRoutes from './routes/eventRoute.js';
import categoryRoutes from './routes/categoryRoute.js';
import pembicaraRoutes from './routes/pembicaraRoute.js';
import dashboardRoutes from './routes/dashboardRoute.js'; // Tambahkan import ini

const app = express();
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});

app.use(cors());
app.use (express.json());

app.get('/', (req, res) =>{
    res.send("hello ini adalah api untuk invofest")
});

app.use('/events', eventRoutes);
app.use('/categories', categoryRoutes);
app.use('/pembicara', pembicaraRoutes);
app.use('/dashboard', dashboardRoutes); // Tambahkan route untuk dashboard

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
