function generateBreadcrumbs(breadcrumbs) {
    for(let i = breadcrumbs.length - 1; i >= 0; i--) {
        $(".breadcrumbs")
            .prepend($(`<li class="breadcrumb-item">
                            <a href=${breadcrumbs[i].link}>${breadcrumbs[i].item}</a>${i < breadcrumbs.length - 1 ? '/' : ''}
                        </li>`));
    }
}

function displayHighlights(highlights) {
    for (let i = highlights.length - 1; i >= 0; i--) {
        $(".highlights-container")
        .prepend($(`<div class="highlight-item"> 
                        <img src=${highlights[i].src} alt=${highlights[i].alt} class="highlight-img"/> 
                        <div class="highlight-text"> ${highlights[i].text} </div> 
                    </div>`));
    }
}

function displaySuggestions(suggestions) {
    for (let i = suggestions.length - 1; i >= 0; i--) {
        $(".suggestions-list")
        .prepend($(`<div class="suggestion-item" onclick="handleItem(${i})"> 
                        <img src=${suggestions[i].src} alt=${suggestions[i].alt} class="sugg-img"/>
                        <div class="sugg-item-details">
                            <div class="heading1 t4-responsive" > ${suggestions[i].heading1} </div>
                            <div class="heading2 t4-responsive" > ${suggestions[i].heading2} </div>
                            <div class="sugg-price t3-responsive" > ${(Math.round(suggestions[i].price * 100) / 100).toFixed(2)} KR </div>
                        </div>
                        
                    </div>`));
    }
}

$(function main() {
    let pageBreadcrumbs = [
        {item:"all products", link:"./homepage.html"}, 
        {item:"haircare", link:"./haircare.html"},
        {item:"restorative hair mask", link:"./index.html"}
    ];

    generateBreadcrumbs(pageBreadcrumbs);

    let product = {
        name: "Restorative hair mask",
        subHeading: "Nuturishment in a bottle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum. Luctus accumsan tortor posuere ac ut.",
        highlights: [
            {src: "./images/organic.png", alt:"organic-icon", text:"100% organic"},
            {src: "./images/organic.png", alt:"organic-icon", text:"100% organic"},
            {src: "./images/organic.png", alt:"organic-icon", text:"100% organic"},
            {src: "./images/organic.png", alt:"organic-icon", text:"100% organic"}
        ],
        suggestions: [
            {src: "./images/product-suggestion.jpg", alt:"product", heading1:"Hand Pommade / Pommade Mains", heading2:"Nourishment for your hands", price: 159.0},
            {src: "./images/product-suggestion.jpg", alt:"product", heading1:"Hand Pommade / Pommade Mains", heading2:"Nourishment for your hands", price: 159.0},
            {src: "./images/product-suggestion.jpg", alt:"product", heading1:"Hand Pommade / Pommade Mains", heading2:"Nourishment for your hands", price: 159.0},
            {src: "./images/product-suggestion.jpg", alt:"product", heading1:"Hand Pommade / Pommade Mains", heading2:"Nourishment for your hands", price: 159.0},
        ],
    };

    $(".product-name").append(product.name);
    $(".sub-heading").append(product.subHeading);
    $(".product-description").append(product.description);

    displayHighlights(product.highlights);
    displaySuggestions(product.suggestions);
});

function handleButton() {
    //here can be the button functionality when is clicked
    console.log("ADD TO CART");
}

function handleItem(itemIndex) {
    //here can be the functionality of the recommended item when is clicked
    console.log(`Item ${itemIndex}`);
}

