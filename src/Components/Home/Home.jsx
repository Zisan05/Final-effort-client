import Banner from "../Banner/Banner";
import Posts from "../Posts/Posts";
import TagsPage from "../TagPage/TagsPage";


const Home = () => {
    return (
        <div>
        
            <Banner></Banner>
            <TagsPage></TagsPage>
            <Posts></Posts>
        </div>
    );
};

export default Home;