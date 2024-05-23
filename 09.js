class Email {
    constructor(email) {
      this._email = email;
    }
  
    get isValid() {
      const [login, domain] = this._email.split('@');
      const invalidCharacters = /[*$#%^]/;
      return !invalidCharacters.test(login) && domain.length > 0;
    }
  
    set email(newEmail) {
      this._email = newEmail;
    }
  }
  
  class Contact extends Email {
    constructor(email, phone) {
        super(email);
        this.phone = phone;
    }

    get phoneType() {
        const phoneLength = this.phone.replace('+', '').length;
        const hasPlus = this.phone.includes('+');
        
        if (hasPlus && phoneLength === 12) {
            return "Мобильный";
        } else if (hasPlus && phoneLength === 18) {
            return "Городской";
        } else {
            return "Неизвестный";
        }
    }
}
  
const contact1 = new Contact('example@gmail.com', '+123456789012');
console.log(contact1.phoneType); // Выведет "Мобильный"

const contact2 = new Contact('example2@gmail.com', '+123456789012345678');
console.log(contact2.phoneType); // Выведет "Городской"

const contact3 = new Contact("noname@example.com", "12345645495");
console.log(contact3.phoneType); // Выведет "Неизвестный"
  