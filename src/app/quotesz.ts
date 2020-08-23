export class Quotesz {
    author: string;
  quote: string;
  createdBy: string;
  votes: number;
  upVotes: number;
  downVotes: number;
  timeCreated: number;

  constructor(author: string, quotez: string, createdBy: string, votes: number, timeCreated: number, upVotes?: number, downVotes?: number) {
    this.author = author;
    this.quote = quotez;
    this.createdBy = createdBy;
    this.votes = this.upVotes + this.downVotes || 0;
    this.timeCreated = timeCreated;
    this.upVotes = upVotes || 0;
    this.downVotes = downVotes || 0;
  }
  upVote(): void {
    this.upVotes += 1;
    this.votes = this.downVotes + this.upVotes;
  }
  downVote(): void {
    this.downVotes += 1;
    this.votes = this.downVotes + this.upVotes;
  }
}



