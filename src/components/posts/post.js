
export default function Post(props) {
    let {item}=props;
    return (
        <div>{item.userId}-{item.id}-{item.title}-{item.body}</div>

    );


}