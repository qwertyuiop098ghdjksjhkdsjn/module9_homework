const parser = new DOMParser();
    const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

    const xmlDOM = parser.parseFromString(xmlString, "text/xml");
    const students=xmlDOM.querySelectorAll("student");

    let list = [];   //создаём пустой массив
    students.forEach(node=>{
    let student={
     name: `${node.querySelector("first").textContent} ${node.querySelector("second").textContent}`,
    age: node.querySelector("age").textContent,
    prof: node.querySelector("prof").textContent
    }
    list.push(student);       //закидываем объект student в массив list
    });
    const result = {
        list: list
    }
    console.log(result)