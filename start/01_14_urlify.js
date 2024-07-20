function urlify(blog) {
  const removePunc = blog.replace(/[.,\/#@!$%\'"^&\*;:{}=\-_`~()]/g, "").toLowerCase();
  return removePunc.trim().replace(/\s/g, "-");
}

console.log(urlify("Emma's blog"));
console.log(urlify("My Blog Name!"));