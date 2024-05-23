class Email {
    constructor(email) {
      this._email = email;
    }
  
    get isValid() {
      const [login, domain] = this._email.split('@');
      const invalidCharacters = /[*$#%^]/;
      return !invalidCharacters.test(login) && domain.length > 0;
    }
  
    setEmail(parts) {
      const [name, subdomain, domain] = parts
      this.email = `${name}@${subdomain}.${domain}`;
    }
  }
  
  const email1 = new Email('example@gmail.com');
  console.log(email1.isValid); // true

  email1.setEmail(['newEmail', 'gmail', 'com']);
  console.log(email1.email); // newEmail@gmail.com
  
  const email2 = new Email('meow.Meowich#tea.new');
  console.log(email2.isValid); // false
  
  module.exports = { Email };