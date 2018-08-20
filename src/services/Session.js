export class Session {
  KEY = 'mate_sn';

  login(user) {
    const token = user.login + user.lastSession;

    if (token) {
      this.setToken(token);
      return true;
    } else {
      return false;
    }
  }

  isLoggined(user) {
    const token = user.login + user.lastSession;
    return token === this.getToken();
  }

  createToken(user) {
    if (user.login && user.lastSession) {
      return user.login + user.lastSession;
    } else {
      return false;
    }
  }

  getToken() {
    const serialKey = localStorage.getItem(this.KEY);
    let accessToken;

    try {
      accessToken = JSON.parse(serialKey).accessToken;
    } catch (err) {
      accessToken = false;
    }

    return accessToken;
  }

  setToken(token) {
    const serialKey = localStorage.getItem(this.KEY);
    let keyData;

    try {
      keyData = JSON.parse(serialKey);
      keyData.accessToken = token;
    } catch (err) {
      keyData = { accessToken: token };
    }

    localStorage.setItem(this.KEY, JSON.stringify(keyData));
  }
}

export default Session;
