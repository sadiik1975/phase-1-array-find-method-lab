// code your solution here
// Function to find the year the Broncos won the Superbowl
function superbowlWin(record) {
    // Use find to locate the first object with a result of 'W'
    const win = record.find(game => game.result === "W");
  
    // Return the year if a win is found, otherwise return undefined
    return win ? win.year : undefined;
  }
  
  // Example usage
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    { year: "1999", result: "W" },
    { year: "1998", result: "W" }
  ];
  
  console.log(superbowlWin(record)); 