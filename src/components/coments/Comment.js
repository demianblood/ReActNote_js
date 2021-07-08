import {Link} from "react-router-dom";

export default function Comment({item}) {


    return (
        <div>
            {item.id}-<Link to={'/comments/'+item.id}>details by comments</Link>
        {/*    {item.id}-<Link to={*/}
        {/*    {*/}
        {/*        pathname: '/comments/' + item.id,*/}
        {/*        state: item*/}
        {/*    }*/}
        {/*}>details by comments</Link>*/}
        </div>
    );


}