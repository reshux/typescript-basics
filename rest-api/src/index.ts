import { ApiCall } from './api-call';
import { User } from './User';
import { Repo } from './Repo';

import fs from 'fs';
const append = fs.appendFile;
const write = fs.writeFile;

// We collect the username from command line
let username = process.argv[2];
// We instantiate a request server here.
let service = new ApiCall();

// The two following API calls have basic loggers to terminal
// as callbacks but you can get creative! As of now the two calls
// are seperate but they can get further integrated and work in sync
// In this case, there wouldn't be two API calls but one. Do keep in
// mind that you can come close to callback hell!
service.getUserInfo(username, (user: User) => {
  write(`./${username}.txt`, JSON.stringify(user), err => {
    if (err) console.log(err);
    console.log('Successfully written User to file.');
  });
});

service.getRepos(username, (repos: Repo[]) => {
  append(`./${username}.txt`, JSON.stringify(repos), err => {
    if (err) console.log(err);
    console.log('Successfully written Repos to file.');
  });
});

export default service;
