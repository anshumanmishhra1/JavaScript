const post ={
    username : 'anshumanmishhra',
    content : 'reel',
    likes : 140,
    repost : 5,
    tags : ["apnacollege", "delta"]
};

console.log(post);

console.log("\n");
/* How to acess these values  **Get Values ** */

let get=post.username;
let getValues= post["likes"];
console.log(get);
console.log(getValues);

console.log("\n");

const obj = {
    1: "a",
    2: "b",
    true : "c",
    null : "d",
    undefined: "e"
};
