export default class Candidate {
  id;
  name;
  birthday;
  email;
  education;
  avatar;

  constructor(id, name, birthday, email, education, avatar) {
    this.id = id;
    this.name = name;
    this.birthday = birthday;
    this.email = email;
    this.education = education;
    this.avatar = avatar;
  }
}
