class Mail {
  constructor() {
    this.config();
  }

  config() {
    // get user config from database

    return {
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '1b9d1ed88f6f8a',
        pass: '5f11189ce09ea4'
      }
    };
  }
}

export default new Mail().config;
