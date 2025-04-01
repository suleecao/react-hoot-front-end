const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/hoots`;

//first function
const index = async () => {
    try {
      const res = await fetch(BASE_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  export { index }; //named export syntax
  
  
  //must have space after Bearer