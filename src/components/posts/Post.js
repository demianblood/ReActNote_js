// export default function Post({item, fnFather}) {
//
//     return (
//         <div>
//             {item.id}-{item.name}-
//             <button onClick={() => {
//                 return fnFather(item.id);
//             }
//             }>click me
//             </button>
//         </div>
//
//     );
//
// }
export default function Post({item,postADD}) {
    return (
        <div>
            {item.name}-{item.id}-{item.title}-{item.body}
        </div>
    );


}