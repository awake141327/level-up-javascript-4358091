function getStudents(classroom) {
  const {hasTeachingAssistant, classList} = classroom;

  let teacher, assistant, students;
  if (hasTeachingAssistant) {
    [teacher, assistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

let classroom1 = {
  hasTeachingAssistant: true,
  classList: ["Rashida", "John", "Roman", "Lisa", "Amaan"],
}

let classroom2 = {
  hasTeachingAssistant: false,
  classList: ["Rashida", "Roman", "Lisa", "Amaan"],
}

console.log(getStudents(classroom1));
console.log(getStudents(classroom2));