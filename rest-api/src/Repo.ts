// We create Repo objects with the response that we
// receive from the server. This class is exported to be
// used in './api-call.ts'

export class Repo {
  name: string;
  description: string;
  url: string;
  size: number;
  forkCount: number;

  constructor(res: any) {
    this.name = res.name;
    this.description = res.description;
    this.url = res.url;
    this.size = res.size;
    this.forkCount = res.forks_count;
  }
}
