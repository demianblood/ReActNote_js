
export default function Comment(props) {
    let {item} = props;
    return (
        <div>{item.postId}-{item.id}-{item.name}-{item.email}-{item.body}
            <hr/>
        </div>
    )
}