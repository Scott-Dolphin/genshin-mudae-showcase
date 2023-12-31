
// import weapons from './data/genshinData.json'


export default function Card({ characterName, weapon, level, constellation, ascension }) {
    const name = (characterName.replace(/([a-z])([A-Z])/g, '$1_$2'));
    // console.log(myWeapons);
    return (
        <div className="Card">
            <img src={require(`./data/characterImg/${name}_Icon.png`)}></img>
            <h2>{name.replace("_", " " )}</h2>
            <h3>Equipped: {weapon.replace(/([a-z])([A-Z])/g, '$1 $2')}</h3>
            <p>Level {level}</p>
            <p>C{constellation}</p>
            <p>A{ascension}</p>
        </div>
    )
}


/* Unused
function Pfp({ cName }) {
    let imgLink = "./data/characterImg/" + cName + "_Icon.png";

    return (
        <>
            <img src={require(imgLink + "")} alt={cName}></img>

        </>

    )
}
*/
// function stringConvert( cName) {
//     let convertedString = "./data/characterImg/" + cName + "_Icon.png";
//     return convertedString;
// }



// export default function ShelfRow({ character1, character2, character3, character4 }) {
//     return (
//         <div className="shelfRow">
//             <Card characterName={character1} />
//             <Card characterName={character2} />
//             <Card characterName={character3} />
//             <Card characterName={character4} />
//         </div>
//     )
// }
