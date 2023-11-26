import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Posts from "../Posts/Posts";
import TagsPage from "../TagPage/TagsPage";


const Home = () => {
    return (
        <div>
        
            <Banner></Banner>
            <TagsPage></TagsPage>
            <Posts></Posts>
            <Footer></Footer>
        </div>
    );
};

export default Home;