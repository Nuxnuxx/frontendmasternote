id > class > type
# > . > p,h1,h2

!important = override all style

font-family: Georgia, serif;
serif is a fallback if georgia not available
em scale from parent not root
rem scale from font

@import to import all content from another style file


grid is two dimensional, flex is one dimensional

> mean direct children of the element parent 
div.text > p -> direct paragraph of div with text class

+ mean if the element is followed directly by the other and have the same parent
img + p -> paragraph which is follows by an image under same parent

~ mean the element need to be surround by the first element on the left to apply the style
p ~ code -> code element which are exclusively inside a p element

difference of > and ~ -> children vs sibling not the same application

BEM (block, element, modifier) name class like this

box model -> padding and border are added to the initial width and height of the div

border-box ->  padding and border are substarct from the initial width and height to get the real div size

z-index is by default to 0

fixed get stick to the root document
sticky get stick to the container parent


be semantic not declarative (exemple : class put on color on title, class named title not color blue)

vertical align exist

display none remove it from the dom

justify-items for grid like justify-content for flex
