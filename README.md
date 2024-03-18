# Generate a list of size (default=10000) unique numbers

This project is a Node.js program to generate a list of size unique numbers in random order between 1 and size (10000).
I have implemented several algorithms to determine which one is more suitable
- I used Set() class as a quick and easy way to create an array with unique values
- I used Fisher–Yates shuffle The array 1-10000 is nothing but a regular array from 1 to 10000, then we shuffle the data around



## Start the program

You need to have Node.js installed on your computer to run the program.

1. Clone the repository to your computer:

```bash
   git clone https://github.com/vladimirovsk/Pandell.git
   
   cd Pandell
   
   npm install
   
   npm run start
````
After executing the command, you will get a JSON object

{
    runtime: 4 ms // script run time
    type: 0 // type algorithms (0, 1)
    size: 10000  // The size of the received array
    data: [ 1000, 2, 5677] // Array data
}

You can also specify the required array size, e.g.:
````
    node index.js -t=0 --s=500000
````
or
````
    node index.js ==type=1 --size=500000
````
In this case you will get an array of random numbers of size = 500000 and type=1

For the speed of array formation, method 1 is preferable, but in practice, 
method 0 is more applicable. Because, as a rule, 
there is never a ready array at once

My test results:
````
node index.js -t=0 -s=1000000
runtime: '994 ms',
  type: 0,
  size: 1000000,
  data: [
    727227, 633490, 723215, 455705, 796502,  14780, 405473....
    ]

node index.js -t=1 -s=1000000

{
 runtime: '53 ms',
  type: 1,
  size: 1000000,
  data: [
    431494, 255272, 496345,  48912, 463397, 716312, 908782....
   ]
}
    
````

