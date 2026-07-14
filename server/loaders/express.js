import express from 'express';
import cors from 'cors';
import FeedRoutes from '../routes/FeedRoutes.js';
import errorMiddleware from '../middlewares/errorMiddleware.js';

const expressLoader = () => {
  const app = express();

  app.use(
    cors({
      origin: [
        'https://myfeed-demo.netlify.app',
        'http://localhost:3001',
      ],
      methods: ['GET', 'POST'],
    })
  );

  app.use(express.json());
  app.use('/api/feed', FeedRoutes);
  app.use(errorMiddleware);

  return app;
};

export default expressLoader;