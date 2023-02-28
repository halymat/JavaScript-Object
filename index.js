// Question 1 Using the constructor method to creat an instagram Post

const InstagramPost = new Object();
InstagramPost.HandleOfAuhor = "Chinual Achebe";
InstagramPost.content = "Things Fall Apart";
InstagramPost.image =
    "data:image/jpeg;base64,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";

InstagramPost.numberOfViews = 500;
InstagramPost.numberOfLikes = 1000;
InstagramPost.displayNumberofviews = function() {
    return this.numberOfViews;
};
InstagramPost.increaseNumberOfLikes = function() {
    return (this.numberOfLikes += 5);
};

console.log(InstagramPost);
console.log(InstagramPost.displayNumberofviews()); // 500
console.log(InstagramPost.increaseNumberOfLikes()); // 1005

// Using Factory method to create Musa Dawodu JAMB Scores

function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location,
        getAge() {
            return "I am " + age + " years old.";
        },
        greet() {
            return "Hello, my name is " + name + " I live in " + location + " City.";
        },
    };
}

const Musa = createPerson("Musa", 18, "Abuja");
const Johm = createPerson("John", 24, "Lagos");
console.log(Musa);

console.log(Musa.getAge());
// I am 18 years old.
console.log(Johm.greet());
// Hello, my name is John I live in Lagos City.

// Question b

function createJambScores(eng, govt, lit, crk) {
    return {
        ENG: 70,
        GOVT: 85,
        LIT: 82,
        CRK: 94,
        getMusaScore() {
            return (
                "Musa Jamb Scores " +
                this.GOVT +
                ", " +
                this.GOVT +
                ", " +
                this.LIT +
                ", " +
                this.CRK
            );
        },
    };
}
console.log(Musa);
const MusaScore = createJambScores(70, 85, 82, 94);

console.log(MusaScore.getMusaScore());
// Musa Jamb Scores 85, 85, 82, 94

// Question 5, THE DIFFERENT WAYS TO CLONE AN OBJECT ARE STATEND BELOW

// 1. Using Object.assign()
// 2. Using spread sytax i.e, ...
// 3. Using the method JSON.parse(JSON.stringify())

// Question 5

const presidentialCandidates = {
    AAC: "Omoyele Sowore",
    ACCORD: "Christopher Imumolen",
    APC: "Bola Ahmed Tinubu",
    LP: "Peter Obo",
    NNPP: "Rabiu Kwankwaso",
    PDD: "Atiku Abubakar",
};

for (let [i, value] of Object.entries(presidentialCandidates)) {
    console.log(value + " " + "is the presidential candidates of " + i + ".");
}

/*
Omoyele Sowore is the presidential candidates of AAC.
Christopher Imumolen is the presidential candidates of ACCORD.
Bola Ahmed Tinubu is the presidential candidates of APC.
Peter Obo is the presidential candidates of LP.
Rabiu Kwankwaso is the presidential candidates of NNPP.
Atiku Abubakar is the presidential candidates of PDD.
*/