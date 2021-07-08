import {Link} from "react-router-dom";

export default function Post({item}) {

    return (
        <div>
            {item.id}-<Link to={'/posts/'+ item.id}>details by posts</Link>
        {/*    {item.id}-<Link to={*/}
        {/*    {*/}
        {/*        pathname: '/posts/' + item.id,*/}
        {/*        state: item*/}
        {/*    }*/}
        {/*}>details by posts</Link>*/}
        </div>
    );


}