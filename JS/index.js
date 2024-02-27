//switch structure

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

// categorySorter(myCategories)

// controller 
function categorySorter(categoriesToSort) {
    console.log("sort");

    // hoved kategori arrays
    let myElectronics = []
    let myCosmetics = []
    let myVehicles = []
    let myMisc = []

    categoriesToSort.forEach(category => {

        switch (category) {

            case 'laptops':
            case 'lighting':
            case 'smartphones':

                myElectronics.push(category)
                break;

            case 'fragrances':
            case 'skincare':
                myCosmetics.push(category)

                break;

            case 'automotive':
            case 'motorcycle':
                myVehicles.push(category)

                break;

            default:

                myMisc.push(category)
                break;
        }

    });

     console.log(myElectronics);
    console.log(myCosmetics);
    console.log(myVehicles);
    console.log(myMisc); 

    // build datastructure to view code
    let myNavigationData = [
        {
            superCategoryname: 'Electronics',
            subCategories: myElectronics
        },
        {
            superCategoryname: 'Cosmetics',
            subCategories: myCosmetics
        },
        {
            superCategoryname: 'Vehicles',
            subCategories: myVehicles
        },
        {
            superCategoryname: 'misc',
            subCategories: myMisc
        }

    ]

    BuildNavigation(myNavigationData);

}



// view
function BuildNavigation(myNavigationData) {

    // hvor skal vi bygge navigation
    let myNavElement = document.getElementById('navigation')

    myNavigationData.forEach(superCatData => {

        // ul from category array

        let mySubCats = '<ul>'
        superCatData.subCategories.forEach(subCatName => {
            let myListElement = `<li><div class="navRollover"onClick="navCallback('${subCatName}')">${subCatName}</div></li>`
            mySubCats += myListElement
        });
        mySubCats += '</ul>'

        //console.log(mySubCats);
        //console.log(superCat.superCategoryname);
        let myCatHTML = `<div class="navCategories"><h3 class="navRollover" onClick="navCallback('${superCatData.superCategoryname}')">${superCatData.superCategoryname}</h3>
        ${mySubCats}
        </div>`
        myNavElement.innerHTML += myCatHTML
    });


}


/*
<div class="navCategories">

            <h3 class="navRollover" onClick="navCallback('category 1')">category 1</h3>
            <ul>
                <li>
                    <div class="navRollover" onClick="navCallback('sub 1 of 1')">sub 1</div>
                </li>
                <li>
                    <div class="navRollover" onClick="navCallback('sub 2 of 1')">sub 2</div>
                </li>

            </ul>
        </div>

        */













function navCallback(myItem) {
    console.log(myItem);

}

// function BuildNavigation(myNavigationData){

// let myNavElement= document.getElementById('navigation')

// let myNavigationHTML=''

// myNavigationData.forEach(superCat => {
//         console.log(superCat.superCategoryname);

//       let myCatHTML=`<div class="navCategories"><h3 class= "navRollover" onClick="navCallBack('category 1)">category 1
//       </h3></div>`    
//     });
// }

