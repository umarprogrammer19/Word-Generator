let heading = document.getElementById('heading');
let buttons = document.querySelectorAll('button');
const alphabets = [
    "Xenophobe",
    "Mushy",
    "Rigor",
    "Ivy",
    "Glove",
    "Quaint",
    "Yawn",
    "Piquant",
    "Knead",
    "Oasis",
    "Junky",
    "Ulcer",
    "Wisp",
    "Crest",
    "Nourish",
    "Vogue",
    "Dwarf",
    "Xylophone",
    "Lively",
    "Gleam",
    "Rye",
    "Zephyr",
    "Briar",
    "Unkind",
    "Frond",
    "Sow",
    "Yogic",
    "Kudos",
    "Torrid",
    "Amber",
    "Nasty",
    "Vibrant",
    "Xenon",
    "Mural",
    "Raven",
    "Igloo",
    "Gauge",
    "Quota",
    "Yokel",
    "Pinch",
    "Kitty",
    "Ogre",
    "Jovial",
    "Unify",
    "Witty",
    "Crypt",
    "Clove",
    "Nose",
    "Vex",
    "Dress",
    "Xerox",
    "Lore",
    "Glint",
    "Rustic",
    "Zinc",
    "Bland",
    "Unison",
    "Forgo",
    "Savor",
    "Yore",
    "Kiosk",
    "Torso",
    "Andes",
    "Nudge",
    "Vista",
    "Xylograph",
    "Minty",
    "Rouse",
    "Ironic",
    "Glean",
    "Quench",
    "Yukon",
    "Pixel",
    "Knoll",
    "Opaque",
    "Joust",
    "Unguent",
    "Wield",
    "Clump",
    "Croak",
    "Soggy",
    "Blend",
    "Zing",
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Icecream",
    "Jam",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Peach",
    "Quesadilla",
    "Raspberry",
    "Strawberry",
    "Tangerine",
    "Uva",
    "Vanilla",
    "Watermelon",
    "Xigua",
    "Yogurt",
    "Zucchini",
    'Elephant',
    'Elder',
    'Hunter',
    'Have',
];
let words = [];

buttons.forEach(button => {
    button.addEventListener('click', function () {
        let btn = button.value.toUpperCase();
        for (let alphabet of alphabets) {
            if (alphabet[0] === btn) {
                words.push(alphabet);
            }
        }
        if (words.length > 0) {
            let index = Math.floor(Math.random() * words.length);
            heading.innerHTML = words[index];
            words = [];
        }
    })
});

document.addEventListener('keydown', function (event) {
    let key = event.key;
    if ((key >= 'A' && key <= 'Z') || (key >= 'a' && key <= 'z')) {
        for (let alphabet of alphabets) {
            if (alphabet[0].toLowerCase() === key.toLowerCase()) {
                words.push(alphabet);
            }
        }
        if (words.length > 0) {
            let index = Math.floor(Math.random() * words.length);
            heading.innerHTML = words[index];
            words = [];
        }
    }
})
