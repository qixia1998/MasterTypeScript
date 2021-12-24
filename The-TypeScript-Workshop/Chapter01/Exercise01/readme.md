## Exercise 1.01 - Using tsconfig.json
1. Install dependencies with `npm i`.
2. Execute the tsc initialization
   
    `tsc --init`
1. Verify that a new tsconfig.json file is created within the folder, and that it's target value is "es5".

2. Compile the squares.ts file using<br>

    `tsc squares.ts`

5. Compile the squares.ts file using ES6 targets

    `tsc --target es6 squares.ts`