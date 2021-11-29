One of the main focus of the project was to simulate that the product 
information is coming from an API or backend and it is dynamically 
manipulated in the frontend. For this example, I used a hard-coded object 
that contains all the specific information about the product. All the operations 
are done in the index.js file where the code is organised so that each function 
is responsible for a specific section of the page.

Another important aspect was the responsiveness of the page. The css code 
was implemented for the mobile version of the website and additional changes 
were added for the desktop at the 769px min-width breakpoint. A few of these
changes are just about the resize of some elements and the reposition of 
different containers in the page, but most of them are regarding the different
state of the clickable elements. The purpose was to provide to the user a nice 
feedback when they interact with these elements on both mobile and desktop versions. 

In addition, I tried to simulate the breadcrumbs functionality by using 2 more pages 
(homepage.html & haircare.html) just to showcase the fact that the breadcrumb 
is not hard-coded. Instead, a new one is generated on every page.