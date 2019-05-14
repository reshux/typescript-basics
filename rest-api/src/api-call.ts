// Import libraries
import * as request from 'request';
// Import modules
import { User } from './User';
import { Repo } from './Repo';

// Instead of writing the options for request twice, let's declare
// them outside of the class. We need to pass in the header to make
// requests to GitHub API. JSON part of this is optional, you can
// alternatively user JSON.parse(*)
const requestOptions: any = {
  headers: { 'User-Agent': 'request' },
  json: true
};

export class ApiCall {
  // This method takes in a username and returns a User object
  getUserInfo(username: string, callback: (user: User) => any) {
    request.get(
      'https://api.github.com/users/' + username,
      requestOptions,
      (err: any, response: any) => {
        let user = new User(response.body);
        callback(user);
      }
    );
  }

  // This method takes in a username and returns that user's repos
  getRepos(username: string, callback: (repos: Repo[]) => any) {
    request.get(
      'https://api.github.com/users/' + username + '/repos',
      requestOptions,
      (err: any, response: any) => {
        let repoArray = response.body.map((repo: any) => new Repo(repo));
        callback(repoArray);
      }
    );
  }
}
