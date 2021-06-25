import Users from "./components/users/users";
import Menu from "./components/menu/menu";

export default function App() {
    return (
        <div>
            <Menu
                pages={['users page', 'coments page', 'post page']}
                classes={['target']}
            />

            <Users/>
            <Menu pages={['about', 'team']}
            classes={['abouts','teams']}
            />
        </div>
    );
}
