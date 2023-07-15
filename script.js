/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    const developers = arr.filter(employee => employee.profession === "developer");
    developers.map(developer => console.log(developer));
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach(employee => {
        if (employee.profession === "developer") {
          console.log(employee);
        }
      });
  }
  
  function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(newEmployee);
  }
  
  function removeAdmin() {
    const filteredEmployees = arr.filter(employee => employee.profession !== "admin");
    console.log(filteredEmployees);
  }
  
  function concatenateArray() {
    const newArray = [
        { id: 5, name: "sumit", age: "22", profession: "manager" },
        { id: 6, name: "rahul", age: "24", profession: "developer" },
        { id: 7, name: "amit", age: "23", profession: "designer" }
      ];
      
      const combinedArray = arr.concat(newArray);
      console.log(combinedArray);
  }