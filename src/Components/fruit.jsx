export default function fruit ({name, price, emoji, soldout}) {
    return (
        <>
             <li> {emoji} {name} ${price} {soldout ? "soldout" : ""} </li>
        </>
    );
}