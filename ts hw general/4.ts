interface UserData {
    name: string;
    age: number;
    pet: string;
  }
  
  const showUserInfo = ({ name, age, pet }: UserData): void => {
    console.log(`Name: ${name}, Age: ${age}, Pet: ${pet}`);
  };
  
  // Приклад використання:
  showUserInfo({ name: "Alice", age: 28, pet: "Dog" });
  