import app from './app';

class Server {
  constructor() {
    this.start();
  }

  start() {
    app.listen(3000, () => {
      console.log(`Server running at port 3000`);
    });
  }
}

new Server();
