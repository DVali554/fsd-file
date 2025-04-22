// Get today's date
const today = new Date();

// Get January 1st of the next year
const nextYear = today.getFullYear() + 1;
const newYear = new Date(`January 1, ${nextYear} 00:00:00`);

// Calculate difference in milliseconds
const diffInMs = newYear - today;

// Convert milliseconds to days
const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

console.log(`🎉 ${diffInDays} day(s) left until New Year ${nextYear}!`);
