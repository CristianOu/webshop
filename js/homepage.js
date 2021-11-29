function generateBreadcrumbs(breadcrumbs) {
    for(let i = breadcrumbs.length - 1; i >= 0; i--) {
        $(".breadcrumbs")
            .prepend($(`<li class="breadcrumb-item">
                            <a href=${breadcrumbs[i].link}>${breadcrumbs[i].item}</a>${i < breadcrumbs.length - 1 ? '/' : ''}
                        </li>`));
    }
}

$(function main() {
    
    let pageBreadcrumbs = [
        {item:"all products", link:"./homepage.html"},
    ];
    generateBreadcrumbs(pageBreadcrumbs);
});