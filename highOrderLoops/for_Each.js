// For Each loop

const coding = ["js", "ruby", "java", "python", "c++"]

coding.forEach( (value, index, arr) => {
    console.log(value, index, arr);
})


const myCoding =[
    {
        languageName: "JavaScript",
        ShortCut: "JS"
    },
    {
        languageName: "CPP",
        ShortCut: "C++"
    },
    {
        languageName: "Ruby",
        ShortCut: "rb"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})