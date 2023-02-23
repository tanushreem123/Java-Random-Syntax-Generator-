const accessModifiers = ["public", "private", "protected"];
      const primitiveTypes = ["int", "double", "float", "boolean", "char"];
      const objectTypes = ["String", "Object", "ArrayList", "Map", "Set"];
      const variableNames = ["count", "result", "name", "age", "flag"];
      const operators = ["+", "-", "*", "/", "%", "==", "!=", "<", ">", "<=", ">="];
      const operator=["+", "-", "*", "/", "%", "!=", "<", ">", "<=", ">="];

      // Function to generate a random Java syntax example
      function generateJavaSyntax() {
        let syntax = "";
        // Choose a random access modifier
        syntax += accessModifiers[Math.floor(Math.random() * accessModifiers.length)];
        syntax += " ";
        // Choose a random primitive or object type
        if (Math.random() < 0.5) {
          syntax += primitiveTypes[Math.floor(Math.random() * primitiveTypes.length)];
        } else {
          syntax += objectTypes[Math.floor(Math.random() * objectTypes.length)];
        }
        syntax += " ";
        // Choose a random variable name
        syntax += variableNames[Math.floor(Math.random() * variableNames.length)];
        syntax += " = ";
        // Choose a random value or expression
        syntax += Math.floor(Math.random() * 100);
        syntax += " ";
        syntax += operators[Math.floor(Math.random() * operator.length)];
        syntax += " ";
        syntax += Math.floor(Math.random() * 100);
        syntax += ";";
        return syntax;
      }


function updateSyntax() {
  let syntax = document.getElementById("syntax");
  syntax.innerText = generateJavaSyntax();
}

// Update the syntax every 30 minutes
setInterval(updateSyntax, 30 * 60 * 1000);
updateSyntax();
