// export default function User({item, fnFather}) {
//
//     return (
//         <div>
//             {item.id}-{item.name}-
//             <button onClick={() => {
//                 return fnFather(item.id);}
//             }>click me
//             </button>
//         </div>
//     );
//
//
// }


export default function User({item, fnFather, postADD}) {
    return (
        <div>{item.id}-{item.name}-
            <button onClick={() => {
                return fnFather(item.id)
            }}>click by user</button><button onClick={postADD}>Click by post</button>
        </div>
    );
}
