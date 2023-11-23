# My Project name's  (s.Academy)
## Project Live Link : https://shamim-academy.netlify.app
-  ### features of my project :
    - Our project is an educational training best programming project.
    - Our project includes a banner and service featuring top tutors and upcoming courses along with footer.
    - In our project, different types of courses are outlined, users can take courses as per their choice.
    - Each course has course image, title, price, duration,rating and short description.
    - When the user is logged in to the project, the user can see all the course information correctly.
      
-  ### functionalities of my project :
    - We have used tailwind and DaisyUI and react in our projects.
    - Even installed several React packages like toast for icon, sweet alert for helmet and used to show AOS animations.
    - Firebase is used for authentication and authorization.Firebase authentication method enabled so that users can login to the project with email and password or Google
    - When the user comes to the project to sign up, the information will be given to the user, if any field is left blank, then the validator will be shown , the password will be given to the user with a minimum of six characters , 
     special characters , one uppercase,lowercase etc.
    - A toast will be shown when the user registers and the user's profile and display name will be updated automatically at the time of user registration.
    - Finally if the user wants, he can log out of the project.
      
-  ### The following questions are answered with explanation:
- Question no- 1 ?
  ```
    let greeting;
    greetign = {};
    console.log(greetign);
  ```
    - A : `{}`
    - B : `ReferenceError: greetign is not defined`
    - C : `undefined`
    - #### Answer & explanation
       - Answer : C
       - Explanation : Declared the variable as greeting.But then misspelled it as greeting when trying to assign an empty object.Due to the misspelling, greetign was not previously defined.
            
- Question no- 2 ?
  ```
   function sum(a, b){
    return a + b;
  }
  sum(1, "2");
  
  ```
    - A : `NaN`
    - B : ` TypeError`
    - C : `"12"`
    - D : `3`
    - #### Answer & explanation
       - Answer : C
       - Explanation : When we sent two parameters by calling sum function. but while sending parameter we sent its a number and a string so it came as 12 string.

- Question no- 3 ?
  ```
  const food = ["🍕", "🍫", "🥑", "🍔"];
  const info = { favoriteFood: food[0] };
  
  info.favoriteFood = "🍝";
  console.log(food);
  
  ```
    - A : `['🍕', '🍫', '🥑', '🍔']`
    - B : `['🍝', '🍫', '🥑', '🍔']`
    - C : `['🍝', '🍕', '🍫', '🥑', '🍔']`
    - D : `ReferenceError`
    - #### Answer & explanation
       - Answer : A
       - Explanation : Since the change has made to the info object and not the original array food. So the array remains unchanged. Therefore, the output is A.

- Question no- 4 ?
  ```
   function sayHi(name) {
      return `Hi there, ${name}`;
    }
    console.log(sayHi());
   
  ```
    - A : `Hi there,`
    - B : `Hi there, undefined`
    - C : `Hi there, null`
    - D : `ReferenceError`
    - #### Answer & explanation
       - Answer : B
       - Explanation : When we called that sayHi function and didn't pass anything as a parameter during the call. So that sayHi function didn't get any name as a parameter. So he sent Hi there and undefined as a return just because he 
         didn't get no name.
          

- Question no- 5 ?
  ```
  let count = 0;
    const nums = [0, 1, 2, 3];

    nums.forEach((num) => {
  if (num) count += 1;
    });

    console.log(count);
  
  ```
    - A : `1`
    - B : `2`
    - C : `3`
    - D : `4`
    - #### Answer & explanation
       - Answer : C
       - Explanation : So, the output of count is 3 because there are three truthy values (1, 2, and 3) in the nums array, and count is incremented for each of them during the loop.





