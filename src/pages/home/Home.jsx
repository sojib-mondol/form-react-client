import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { toast } from "react-hot-toast";


const Home = () => {

    const {users} = useContext(DataContext)
    console.log("USerrrrrrrr", users);

    const handleToast = () => {
        return toast.success("hello");
    }

    return (
        <div>
            This is home {users.length}
            <button onClick={() => handleToast()} className="btn btn-primary">hello</button>

        </div>
    );
};

export default Home;