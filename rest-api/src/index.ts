import { ApiCall } from './api-call';
import { User } from './User';
import { Repo } from './Repo';

// We collect the username from command line
let username = process.argv[2];
// We instantiate a request server here.
let service = new ApiCall();

// The two following API calls have basic loggers to terminal
// as callbacks but you can get creative! As of now the two calls
// are seperate but they can get further integrated and work in sync
// In this case, there wouldn't be two API calls but one. Do keep in
// mind that you can come close to callback hell!
service.getUserInfo(username, (user: User) => console.log(user));
service.getRepos(username, (repos: Repo[]) => console.log(repos));
