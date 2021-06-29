// import Post from './post';
//
//
// export default function Posts({items,appFn}) {
//     return (
//         <div>
//             {
//                 items.map((value) => <Post key={value.id} item={value} fnFather={appFn}/>)
//             }
//         </div>
//     );
//
//
// }

import Post from "./Post";

export default function Posts({items, addPost}) {
    return (
        <div>
            {items.map((value)=><Post key={value.id} item={value} postADD={addPost}/>)}
        </div>
    );


}