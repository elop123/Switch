//swtich structure

// let myValue=100

// //standard switch and default
// switch (myValue) {
//     case 50:
//         console.log('Var er 50');
//         break;

//     case 75:
//         console.log('Var er 75');
//         break;
//     case 100:
//         console.log('Var er 100');
//         break;

//     default:
//         console.log('Default');
//         break;
// }

let myCategories=[
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
  ];

categorySorter(myCategories)

function categorySorter(categoriesToSort){
let myElectronics=[]
let myCosmetics=[]
let myMisc=[]
let myCars=[]
let myHome=[]

categoriesToSort.forEach(selection =>{

switch (selection) {
    case 'laptops':
    case 'smartphones':
    case 'lighting':
        // console.log('electronics');
        myElectronics.push(selection)
    break;
    
    case 'fragrances':
    case 'skincare':    
        // console.log('skin care');
        myCosmetics.push(selection)
    break;

    case 'home-decoration':
    case 'furniture':   
        // console.log('home');
        myHome.push(selection)
    break;

    case 'automotive':
    case 'motorcycle':
        // console.log('cars');
        myCars.push(selection)
    break;

    default:
        // console.log('misc');
        myMisc.push(selection)
    break;
}})

console.log(myElectronics);
console.log(myCosmetics);
console.log(myCars);
console.log(myHome);

let myNavigationData=[
    {
        superCategoryname:'Electronics',
        subCategories: myElectronics
    },
    {
        superCtaegory:'Cosmetics',
        subcategories:myCosmetics
    },
    {
        superCategoryname:'Cars',
        subcategories:myCars
    },
    {
        superCategoryname:'Home',
        subcategories:myHome
    }
]
console.log(myNavigationData);
}

function BuildNavigation(myNavigationData){

let myNavElement= document.getElementById('navigation')

let myNavigationHTML=''

myNavigationData.forEach(superCat => {
        console.log(superCat.superCategoryname);

      let myCatHTML=`<div class="navCategories"><h3 class= "navRollover" onClick="navCallBack('category 1)">category 1
      </h3></div>`    
    });
}

