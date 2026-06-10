const buttons = document.querySelectorAll(".product button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Product added to cart!");
    });
});

console.log("Tech Store Loaded Successfully");
