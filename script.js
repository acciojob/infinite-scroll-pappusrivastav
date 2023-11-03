//your code here!
//your code here!

document.addEventListener("DOMContentLoaded", function() {
    const list = document.getElementById("infi-list");
    const listItemsCount = 10; // Initial number of list items
    const itemsToAdd = 2; // Number of items to add when the user reaches the end

    // Function to add list items to the list
    function addListItems(start, end) {
        for (let i = start; i < end; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = "Item " + (i + 1);
            list.appendChild(listItem);
        }
    }

    // Initial load: Add the first set of list items
    addListItems(0, listItemsCount);

    // Scroll event listener to trigger adding more items
    list.addEventListener("scroll", function() {
        if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
            const currentItems = list.children.length;
            const newItemsStart = currentItems + 1;
            const newItemsEnd = currentItems + 1 + itemsToAdd;
            addListItems(newItemsStart - 1, newItemsEnd - 1);
        }
    });
});


