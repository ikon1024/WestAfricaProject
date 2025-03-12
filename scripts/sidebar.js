const sidebarItems = [
    { title: '0: Introduction', link: 'introduction.html' },
    { title: '1: Geography & Trade', link: 'trade.html' },
    { title: '2: How trade impacted West Africa', link: 'how-trade-impacted-west-africa.html'},
    { title: '3: The most significant factor', link: 'the-most-significant-factor.html'},
    { title: 'Why I chose to make this project', link: 'why-i-chose-to-make-this-project.html'}
];

// Function to populate the sidebar with items
function populateSidebar() {
    const sidebarList = document.getElementById('sidebar-list');
    const currentPage = window.location.pathname.split("/").pop(); // Get the current page's filename

    // Loop through the items and create list elements
    sidebarItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add("active");
        const link = document.createElement('a');
        link.href = item.link;
        link.innerHTML = `<span>${item.title}</span>`;

        // If the item is the current page, hide it or mark it as hidden
        if (item.link === currentPage) {
            link.style.display = 'none'; // Hide the current page link
        }

        listItem.appendChild(link);
        sidebarList.appendChild(listItem);
    });
}

// Call the function to populate the sidebar
populateSidebar();