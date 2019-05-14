import { Repo } from './Repo';

// We create a User object with the response that we
// receive from the server. This class is exported to be
// used in './api-call.ts'
export class User {
  login: string;
  fullName: string;
  repoCount: number;
  followers: number;

  constructor(res: any) {
    this.login = res.login;
    this.fullName = res.name;
    this.repoCount = res.public_repos;
    this.followers = res.followers;
  }
}
