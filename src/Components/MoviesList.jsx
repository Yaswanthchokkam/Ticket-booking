import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function MoviesList() {
    const [movielist, setMovielist] = useState([
        // { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICAyNEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00389637-utgnfetsba-portrait.jpg", title: "Premalu",type:"Comedy/Romantic" },
        // { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICAxMy41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00389163-snshsztvqu-portrait.jpg", title: "OM BOOM BUSH",type:"Comedy/Drama" },
        // { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-MTI5SyBMaWtlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00343267-bjxpxxtvhp-portrait.jpg", title: "Tillu Square",type:"Action/Comedy/Romantic" },
        // { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICA0OC4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379089-mqnzejlmgz-portrait.jpg", title: "Razak",type:"Drama/Historical" },
        // { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgMTA2SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384234-namrszxlsp-portrait.jpg", title: "Shaithan",type:"Supermatural/Thriller" },
        // { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICAxMi4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00341317-tfhyqcxzpt-portrait.jpg", title: "Madgon Express",type:"Comedy/Drama" },
        // { image: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICAxMy41SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00389163-snshsztvqu-portrait.jpg", title: "OM BOOM BUSH",type:"Comedy/Drama" }
        // Add more movie objects as needed
    ]);
    useEffect(()=>{
        fetch("http://localhost:8095/movielist/getallmovies",{
            method:'GET',
            headers:{
                "Content-Type":"application/json",
                //  "Authorization":"Bearer "+orderacess.loggedUser.token
            }
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
            setMovielist(data);
        })
    },[])

    const [page, setPage] = useState(1); // Initial page number
    const itemsPerPage = 5; // Number of items to show per page

    // Calculate the starting and ending indices for the current page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, movielist.length);

    const handlePrevClick = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextClick = () => {
        if (endIndex < movielist.length) {
            setPage(page + 1);
        }
    };

    return (
        <div className="container-fluid p-4">
            <h1 className='h3'>Recommended Movies</h1>
            <div className="row row-cols-1 row-cols-md-5 g-3 ">
                {movielist.slice(startIndex, endIndex).map((movie, index) => (
                    <div key={index} className="col mb-4">
                        {/* <Link to={'/login'}> */}
                        <div className="card h-100 " >
                            <img
                                src={movie.movieImage}
                                className="card-img-top rounded "
                                alt="Movie Poster"
                                style={{ objectFit: "cover", height: "380px" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-start">{movie.movieName}</h5>
                                <p className="card-title text-start">{movie.movieType}</p>
                                <Link to={`/movies/${movie.movieId}`} className="btn btn-primary">Details</Link>
                            </div>
                        </div>
                        {/* </Link> */}
                    </div>
                ))}
            </div>
            <div className="text-center mt-3">
                <button className="btn btn-primary me-2" onClick={handlePrevClick} disabled={page === 1}>Previous</button>
                <button className="btn btn-primary" onClick={handleNextClick} disabled={endIndex >= movielist.length}>Next</button>
            </div>
        </div>
    );
}
