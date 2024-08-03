// Lesson 4: Assignments | JavaScript Objects
// 1 question left!
// Lesson 4: Assignments | JavaScript Objects
// Remember to take your time and work through each question diligently! Test your code, make sure it works, and try to find ways to improve. Once you are happy and satisfied with your code, upload it to Github, then turn in your Github link at the bottom of the page!
// Don't forget. Make sure this assignment is in it's own repository. Not mixed in with others!
// ________________________________________
// 1. Exploring JavaScript Objects

// Task 1: Create a constructor function for the Book object with properties for title, author, and pages.

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

// Task 2: Implement a method within the Book object to display book information.

Book.prototype.displayInfo = function() {
return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
};


// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.

// Array to store book objects
const books = [];

// Function to add new books
function addBook(title, author, pages) {
  const newBook = new Book(title, author, pages);
  books.push(newBook);
}

// Function to search books by title
function searchByTitle(title) {
  return books.filter(book => book.title.toLowerCase() === title.toLowerCase());
}

// Function to search books by author
function searchByAuthor(author) {
  return books.filter(book => book.author.toLowerCase() === author.toLowerCase());
}


// Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.

// Function to filter books with more than 100 pages
function filterBooksByPages(minPages) {
  return books.filter(book => book.pages > minPages);
}

// Function to format book information with "Title: " and "Author: "
function formatBookInfo() {
  return books.map(book => {
    return {
      title: `Title: ${book.title}`,
      author: `Author: ${book.author}`,
      pages: book.pages
    };
  });
}

// Adding some books
addBook('To Kill a Mockingbird', 'Harper Lee', 281);
addBook('1984', 'George Orwell', 328);
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 180);

// Displaying book info
books.forEach(book => console.log(book.displayInfo()));

// Searching books by title
console.log(searchByTitle('1984'));

// Searching books by author
console.log(searchByAuthor('Harper Lee'));

// Filtering books with more than 100 pages
console.log(filterBooksByPages(100));

// Formatting book info
console.log(formatBookInfo());



// 2. Exploring Objects and Math in JavaScript

// Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.

function Account(accountNumber, balance, owner) {
  this.accountNumber = accountNumber;
  this.balance = balance;
  this.owner = owner;
}


// Task 2: Implement methods within the Account object to deposit and withdraw funds.

// Deposit method
Account.prototype.deposit = function(amount) {
  if (amount > 0) {
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
  } else {
    console.log('Deposit amount must be positive.');
  }
};

// Withdraw method
Account.prototype.withdraw = function(amount) {
  if (amount > 0 && amount <= this.balance) {
    this.balance -= amount;
    console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
  } else if (amount > this.balance) {
    console.log('Insufficient funds.');
  } else {
    console.log('Withdrawal amount must be positive.');
  }
};



// Task 3: Create a method to calculate compound interest based on the balance and specified interest rate.

// Method to calculate compound interest
Account.prototype.calculateCompoundInterest = function(rate, timesCompounded, years) {
  // Formula for compound interest: A = P (1 + r/n)^(nt)
  // Where:
  // A = the future value of the investment/loan, including interest
  // P = the principal investment amount (initial deposit or loan amount)
  // r = the annual interest rate (decimal)
  // n = the number of times that interest is compounded per year
  // t = the number of years the money is invested or borrowed for
  
  const principal = this.balance;
  const r = rate / 100; // Convert percentage to decimal
  const n = timesCompounded;
  const t = years;

  const amount = principal * Math.pow((1 + r / n), (n * t));
  const interest = amount - principal;

  console.log(`Future value: $${amount.toFixed(2)}, Interest earned: $${interest.toFixed(2)}`);
  return { amount, interest };
};



