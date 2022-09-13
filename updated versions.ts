interface objectversion {
    name: string,
    date: string,
    Type: string,
    features: string,
    authors: string,
    Bugs: string[]
}
let versions = [{
    name: "apple-version1",
    date: "2014",
    Type: "major",
    features: "Battery preservation",
    Author: "Steve_jobs",
    Bugs: ['ABC84', "Audio"]
},

{
    name: "Kiwi-version3",
    date: "2021",
    Type: "patch",
    features: "scalable text",
    Author: "Brian Acton",
    Bugs: ['ABC85', "Video"]
},

{
    name: "Grapes-version5.F",
    date: "2017",
    Type: "enhancement",
    features: "Security-By-Design Approach",
    Author: "Bran Acton",
    Bugs: ['ABC86', "crash button after tap"]
},

{
    name: "orange-version2.0",
    date: "2015",
    Type: "patch",
    features: "Auto Rotation Animation",
    Author: "Sergey Brin",
    Bugs: ['ABC87', "Poor UX Writing practices"]
},

{
    name: "Mango-version7.A",
    date: "1999",
    Type: "enhancement",
    features: "scalable text",
    Author: "Sergey Brin",
    Bugs: ['ABC88', "Visualization problems"]
}]

console.log("*******************************************************");
//Identifing Type in versions:-
function identifyObject(typesOfVersions: any) {
    let z = []
    z.push(versions.filter(n => n.Type.includes(typesOfVersions)))
    console.log(z)
}
identifyObject("enhancement")
identifyObject("patch")
identifyObject("major")
//identifying Author Name
let array: any = []
versions.forEach(version => {
    array.push(version.Author)
});
let a = []
a = [...new Set(array)]
let releaseArr = []
for (let i of a) {
    let release = 0
    for (let j of array) {
        if (i == j) {
            release++
        }
    }
    releaseArr.push(release)
}
let max = Math.max(...releaseArr)
for (let k in releaseArr) {
    if (max == releaseArr[k]) {
        console.log("MAXIMUM NUMBER OF VERSIONS IN AUTHOR:-", a[k]);
    }
}
console.log("*******************************************************");
// Identifying Bugs :-
let giveid = "ABC88"
let b = []
for (let i in versions) {
    if (giveid == versions[i].Bugs[0]) {
        b.push(versions[i])
    }
}
console.log("BUGID:-", b)
console.log("*******************************************************");
//Specific feature name:-
let feat = versions.filter(n => n.features.includes("Animation"))
console.log("FEATURE SHORTLISTING IN VERSIONS:-", feat)
