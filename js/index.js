//PRELOADED IMAGES
    function preloader() {
        const imagesPaths = [
           "./img/banner.jpg",
           "./img/photosynthesis.jpg",
           "./img/solar-panels.jpg",
            "./img/windmills.jpg"
        ];
        
        const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }

// IMAGES READY TO BE USED:
console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}\n\t${images[3].src}`); };    
        window.addEventListener("load", preloader);

// DATA RESOURCES
let dataResource = [
    {
        headingContent: "Lobby for Wind Turbines",
        imgUrl: "./img/windmills.jpg",
        bodyText: "Wind energy is a source of renewable energy. It does not contaminate, it is inexhaustible and reduces the use of fossil fuels, which are the origin of greenhouse gasses that cause global warming. In addition, wind energy is a “native” energy, because it is available practically everywhere on the plant, which contributes to reducing energy imports and to creating wealth and local employment. For these reasons, producing electricity through wind energy and its efficient use contributes to sustainable development. Wind energy does not emit toxic substances or contaminants into the air, which can be very damaging to the environment and to human beings.",
        link: `<a href="https://www.acciona.com/renewable-energy/wind-power/">Read more here...</a>`,
    },
    {
        headingContent: "Incorporate Solar Energy Elements",
        imgUrl: "./img/solar-panels.jpg",
        bodyText: "But wait, don't give up on solar just yet! If making your entire home solar is out of your budget, you can still add smaller and less expensive solar elements that help save on electricity. There are a multitude of stationary and portable lights that can run on solar power that you can easily add to your home.Your phones and tablets need a daily recharge, so why not make the energy source green? Solar power banks come with USB ports that you can use to charge your phone, as well as other small gadgets. You can also power your small kitchen appliances -- like your coffee maker, toaster, Instant Pot, slow cooker or sandwich maker -- without plugging them into a wall. There are solar water heater kits you can buy, and they pay for themselves very quickly.",
        link: `<a href="https://www.cnet.com/how-to/cheap-solar-energy-at-home/">Read more here...</a>`
    },
    {
        headingContent: "Support Photosynthesis Energy Research",
        imgUrl: "./img/photosynthesis.jpg",
        bodyText: "An international team of scientists has made a major breakthrough for the future of sustainable fuel. They achieved this major milestone by copying the methods of some of the cleanest energy producers on the planet—plants. Scientists from the University of Cambridge and the Ruhr University Bochum have discovered a new technique that mimics the natural process of photosynthesis in plants, which could be used to produce hydrogen fuel, an extremely clean (zero carbon dioxide emissions) and essentially unlimited energy source.", 
        link: `<a href="https://oilprice.com/Energy/Energy-General/Artificial-Photosynthesis-A-New-Renewable-Energy-Source.html#">Read more here...</a>`
    }
];

let $btns = document.querySelectorAll('button');
let $content = document.querySelector(".content");

//ONLOAD
$content.addEventListener("load", onloadFunction);

function onloadFunction() {
                $content.innerHTML = `<h2>${dataResource[0].headingContent}</h2>
                                     <img src="${dataResource[0].imgUrl}" alt="Wind Turbines">
                                     <p>${dataResource[0].bodyText}</p>
                                     <p class="link">${dataResource[0].link}</p>`;
}

onloadFunction();

//FOCUSED BUTTON ONLOAD
window.onload = function() {
  document.getElementById("focus-onload").focus();
};

// EVENT-OBJECT IS ACCESSED 
// AS THE FIRST PARAMETER OF THE EVENT-HANDLER 
function eventHandler(ev){
    
    // FETCH THE CLICKED BUTTON
    let clickedBtn = ev.target;
    
    // READ TEXT INSIDE BUTTON
    let btnText = clickedBtn.innerText;
    
    if (btnText === "Wind Turbines") {
        $content.innerHTML = `<h2>${dataResource[0].headingContent}</h2>
                              <img src="${dataResource[0].imgUrl}" alt="Wind Turbines">
                              <p>${dataResource[0].bodyText}</p>
                              <p class="link">${dataResource[0].link}</p>`;
        
    } else if (btnText === "Solar Energy") {
        $content.innerHTML = `<h2>${dataResource[1].headingContent}</h2>
                              <img src="${dataResource[1].imgUrl}" alt="Solar Panels">
                              <p>${dataResource[1].bodyText}</p>
                              <p class="link">${dataResource[1].link}</p>`;  
        
    } else {
        $content.innerHTML = `<h2>${dataResource[2].headingContent}</h2>
                              <img src="${dataResource[2].imgUrl}" alt="Green Leaf">
                              <p>${dataResource[2].bodyText}</p>
                              <p class="link">${dataResource[2].link}</p>`;
    }    
}

// LOOP
for(let i=0; i<$btns.length; i++){
    $btns[i].addEventListener("click", eventHandler);
}