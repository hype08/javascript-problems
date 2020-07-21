// make a recipe for hummus using Nested Scope

const hummus = function(factor) {
  const ingredients = function(amount, unit, name) {
    let ingredientAmount = amount * factor
    if (ingredientAmount > 1) {
      unit += "s"
    }
    console.log(`${ingredientAmount} ${unit} of ${name}`)
  }
  ingredients(1, "can", "lemon juice")
}

console.log(hummus(2))
/* 

This function has another function within it.
The ingredient function can see the factor binding. But, the local bindings, such as unit or ingredientAmount is not visible in the outer function.

*/