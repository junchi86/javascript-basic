const country = document.querySelector("select");

const SELECTED_COUNTRY = "selectedCountry";

const setCountry = selCountry => {
    localStorage.setItem(SELECTED_COUNTRY, selCountry);
};

country.addEventListener("change", function (event) {
    if (!event.target.value) {
        return;
    } else {
        setCountry(event.target.value);
        console.log(localStorage.getItem(SELECTED_COUNTRY));
        return;
    }
});