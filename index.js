// Sidebar
const menuItems=document.querySelectorAll(".menu-items");
// Messages 
const messagesNotification =document.querySelector("#messages-notification");

const messages=document.querySelector(".messages");
const message=messages.querySelectorAll(".message");
const messageSearch=document.getElementById("message-search");

//theme
const theme=document.querySelector("#theme");
const themeModal=document.querySelector(".customize-theme");

// Font-Size

const fontSizes=document.querySelectorAll(".choose-size span")

//
var root=document.querySelector(":root");
const body=document.querySelector("body");

const colorPalette=document.querySelectorAll(".choose-color span");

const Bg1=document.querySelector(".bg-1");
const Bg2=document.querySelector(".bg-2");
const Bg3=document.querySelector(".bg-3");

//Remove active class from all menu items
const changeActiveItem=() => {
    menuItems.forEach(item => {
        item.classList.remove("active");
    })
}


menuItems.forEach(item => {
    item.addEventListener("click",()=>{
        changeActiveItem();
        item.classList.add("active");
        if(item.id!="notifications"){
            document.querySelector(".notifications-popup").style.display="none";
        } 
        else {
            document.querySelector(".notifications-popup").style.display="block";
            document.querySelector("#notifications .notification-count").style.display="none";
        }
    })
})


// MESSAGES//

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    
    message.forEach(chat => {
      let hasMatch = false;
      let h5Elements = chat.querySelectorAll('h5');
      
      h5Elements.forEach(element => {
        if (element.textContent.toLowerCase().includes(val)) {
          hasMatch = true;
        }
      });
      
      if (hasMatch) {
        chat.style.display = "flex";
      } else {
        chat.style.display = "none";
      }
    });
  };
  

messageSearch.addEventListener("keydown",searchMessage);


messagesNotification.addEventListener("click",() => {
    messages.style.boxShadow="0 0 1rem var(--color-primary)";
    messagesNotification.querySelector(".notification-count").style.display="none";
    setTimeout(() => {
        messages.style.boxShadow="none";
    },2000);
})


// ==================THEME CUSTOMIZATION=====================//

//Opens modal

const openThemeModal=() => {
    themeModal.style.display="grid";
}

//closig modal

const closeThemeModal= (e) => {
    if(e.target.classList.contains("customize-theme")){
        themeModal.style.display="none";
    }
}

themeModal.addEventListener("click",closeThemeModal);
theme.addEventListener("click",openThemeModal);
// Remove the active class from spans or font size selectors

const removeSizeSelector=()=> {
    fontSizes.forEach(size=> {
        size.classList.remove("active");
    })
}

// =======================================FONT SIZE==========

fontSizes.forEach(size => {

    size.addEventListener("click",()=>{

        removeSizeSelector();
        let fontSize;
        size.classList.toggle("active");

        if(size.classList.contains("font-size-1")){
            fontSize="10px";
            root.style.setProperty("----sticky-top-left","5.4rem");
            root.style.setProperty("----sticky-top-right","5.4rem");
            
        }
        else if(size.classList.contains("font-size-2")){
            fontSize="13px";
            root.style.setProperty("----sticky-top-left","5.4rem");
            root.style.setProperty("----sticky-top-right","-7rem");
        }
        else if(size.classList.contains("font-size-3")){
            fontSize="16px";
            root.style.setProperty("----sticky-top-left","-2em");
            root.style.setProperty("----sticky-top-right","-17rem");
        }
        else if(size.classList.contains("font-size-4")){
            fontSize="19px";
            root.style.setProperty("----sticky-top-left","-5rem");
            root.style.setProperty("----sticky-top-right","-25rem");
        }
        else if(size.classList.contains("font-size-5")){
            fontSize="22px";
            root.style.setProperty("----sticky-top-left","-12rem");
            root.style.setProperty("----sticky-top-right","-35rem");
        }

        //change font size of the root HTML element
    document.querySelector("html").style.fontSize=fontSize;
    })

    
})



// ============================Primary COlors=============/

const changeActiveColorClass= () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove("active");
    })
}

colorPalette.forEach(color =>{

    color.addEventListener("click",() =>{

        changeActiveColorClass();

        let primaryHue;
        if(color.classList.contains("color-1")){
            primaryHue=252;
        }

        else if(color.classList.contains("color-2")){
            primaryHue=352;
        }

        else if(color.classList.contains("color-3")){
            primaryHue=330;
        }
        else if(color.classList.contains("color-4")){
            primaryHue=152;
        }

        else if(color.classList.contains("color-5")){
            primaryHue=240;
        }

        color.classList.add("active");
        root.style.setProperty("--primary-color-hue",primaryHue);
        
    })
})

// ===========================THEME BACKGROUND VALUES===============

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


// Changes BG COLOR

const changeBG=() => {
    root.style.setProperty("--light-color-lightness",lightColorLightness);
    root.style.setProperty("--white-color-lightness",whiteColorLightness);
   body.style.color="white";

}

Bg1.addEventListener("click", () => {

    //add active class;
    Bg1.classList.add("active");
    Bg3.classList.remove("active");
    Bg2.classList.remove("active");

    //Remove customize changes from local storage
    window.location.reload();
})

Bg2.addEventListener("click", () => {
    whiteColorLightness="20%";
    lightColorLightness="15%";

    //add active class;
    Bg2.classList.add("active");
    Bg1.classList.remove("active");
    Bg3.classList.remove("active");
    changeBG();
})

Bg3.addEventListener("click", () => {
    darkColorLightness="95%";
    whiteColorLightness="10%";
    lightColorLightness="0%";

    //add active class;
    Bg3.classList.add("active");
    Bg1.classList.remove("active");
    Bg2.classList.remove("active");
    changeBG();
})

