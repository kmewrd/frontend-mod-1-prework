/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor (author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  likeTweet() {
    this.numberOfLikes = this.numberOfLikes + 1;
  }
  addComment(string) {
    this.comments.push(string);
  }
};

var firstTweet = new Tweet("Caitriona", "Pictures from my trip to Wisconsin!", "21/09/18 06:34:30 PM", 24, ["Looks fun!", "Great pics!"]);
var secondTweet = new Tweet("Kim", "Happy gotcha day to my girl.", "21/08/24 10:11:04 AM", 38, ["What a sweetie."]);

console.log(firstTweet);
console.log(secondTweet);

secondTweet.likeTweet();
secondTweet.addComment("I love her eyes!");
console.log(secondTweet);
