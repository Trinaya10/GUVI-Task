// Assuming you have a JSON object like this
/*var myJsonObject = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };
  
  // Get an array of keys using Object.keys()
  var keys = Object.keys(myJsonObject);
  
  // Iterate over the keys using a for loop
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = myJsonObject[key];
    console.log(key + ": " + value);
  }*/

  /*var resumeData = {
    "name": "John Doe",
    "contact": {
      "email": "john.doe@example.com",
      "phone": "+1 (123) 456-7890",
      "address": "123 Main Street, Cityville, State, 12345"
    },
    "summary": "Experienced software engineer with a passion for building scalable and efficient web applications.",
    "education": [
      {
        "degree": "Bachelor of  Computer Science and Engineering",
        "school": "M.Kumarasamy College of Engineering",
        "graduationYear": "2023"
      }
    ],
    "experience": [
      {
        "position": "Fresher",
        "company": "Kaar Technologies",
        "startDate": "22nd Sept 2022",
        "endDate": "30th Dec 2023",
        "responsibilities": [
          "Led a team of developers in the implementation of a new e-commerce platform.",
          "Designed and optimized database schema for improved performance."
        ]
      }
      
    ],
    "skills": [
      "JavaScript",
      "Node.js",
      "React",
      "HTML",
      "CSS",
      "SQL",
      "Git",
      
    ]
  };
  
  console.log(JSON.stringify(resumeData, null, 2));*/

  //3. Codekata practice
  /* To delete all the repeating characters in a string
  Input
  missipie
  Output
  mpe
code:
  // Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  const ip=userInput[0].split('')
  const lengh=ip.length
  const frequency={};
  var s=" "
  for(var i=0;i<ip.length;i++)
  {
      if(!frequency[ip[i]])
      {
          frequency[ip[i]]=1
      }
      else
      {
          frequency[ip[i]]+=1
      }
  }
  
  const entry=Object.entries(frequency)
  console.log(entry)
  for(var x=0;x<entry.length;x++)
  {
      if(entry[x][1]==1)
      {
         process.stdout.write(entry[x][0]+'');
          
      }
  }
  
  
  //end-here
});


  
  */