// go to -> scroll to bottom -> run the script -> https://www.ycombinator.com/companies

const companies = Array.from(document.querySelectorAll('[class^="_company_"]')).map(x => x.href)
console.log(companies)

const names = Array.from(document.querySelectorAll('[class^="_coName_"]')).map(x => x.innerText)
console.log(names)

function downloadCSV(array) {
  const csvContent = array.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const link = document.createElement('a');

  link.href = window.URL.createObjectURL(blob);
  link.download = 'data.csv';
  link.click();
}

const transposedArray = companies.map((value, index) => [value, names[index]]);

// Flatten the transposed array to create the final CSV data
const flattenedArray = transposedArray.map(row => row.join(','))

// Call the function to download the CSV
downloadCSV(flattenedArray);

