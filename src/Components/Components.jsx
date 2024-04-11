import CarusolComponent from "./CarusolComponent";
import Footer from "./Footer";
import MoviesList from "./MoviesList";
import MyProfile from "./MyProfile";
import NavbarComponent from "./NavbarComponent";

export default function Components(){
    return(
        <div>
            <NavbarComponent/>
            <CarusolComponent/>
            <MoviesList/>
            <Footer/>
        </div>
    )
}