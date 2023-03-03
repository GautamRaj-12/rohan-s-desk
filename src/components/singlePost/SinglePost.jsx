import React from 'react'
import './singlepost.css'
import singlePostImage from "../../assets/post-test.jpg"

function SinglePost() {
    return (
        <div className="container">
            <div className="singlePost">
                <div className="singlePostWrapper">
                    <img src={singlePostImage} alt="" className="singlePostImg" />
                    <h1 className="singlePostTitle">Lorem ipsum dolor.</h1>
                    <div className="singlePostEdit">
                        <i class="singlePostIcon fa-solid fa-file-pen"></i>
                        <i class="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                    <div className="singlePostInfo">
                        <span className="singlePostAuthor"><small>Author: <strong>Rohan</strong></small></span>
                        <span className="singlePostDate"><small>1 hour ago</small></span>
                    </div>
                    <div className="singlePostDesc">
                        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore debitis magni quia quaerat illum excepturi cum incidunt. Cupiditate, aliquam? Hic suscipit iure sunt atque unde rerum exercitationem ullam. Omnis eaque, minus delectus obcaecati labore corrupti ipsam mollitia, deleniti tempore sunt architecto maiores pariatur asperiores totam nostrum porro eius voluptate quisquam! Beatae deserunt reiciendis, suscipit quae nesciunt, praesentium et cum iusto eligendi modi voluptatibus itaque quod. Delectus nemo cupiditate, itaque voluptate repellat aspernatur facere ab commodi id a sint vero. Ad reiciendis id animi repellat fugit aspernatur odit? Illo ut corrupti adipisci voluptatibus sed debitis quis cupiditate consectetur! Reiciendis, quae quo.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore debitis magni quia quaerat illum excepturi cum incidunt. Cupiditate, aliquam? Hic suscipit iure sunt atque unde rerum exercitationem ullam. Omnis eaque, minus delectus obcaecati labore corrupti ipsam mollitia, deleniti tempore sunt architecto maiores pariatur asperiores totam nostrum porro eius voluptate quisquam! Beatae deserunt reiciendis, suscipit quae nesciunt, praesentium et cum iusto eligendi modi voluptatibus itaque quod. Delectus nemo cupiditate, itaque voluptate repellat aspernatur facere ab commodi id a sint vero. Ad reiciendis id animi repellat fugit aspernatur odit? Illo ut corrupti adipisci voluptatibus sed debitis quis cupiditate consectetur! Reiciendis, quae quo.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore debitis magni quia quaerat illum excepturi cum incidunt. Cupiditate, aliquam? Hic suscipit iure sunt atque unde rerum exercitationem ullam. Omnis eaque, minus delectus obcaecati labore corrupti ipsam mollitia, deleniti tempore sunt architecto maiores pariatur asperiores totam nostrum porro eius voluptate quisquam! Beatae deserunt reiciendis, suscipit quae nesciunt, praesentium et cum iusto eligendi modi voluptatibus itaque quod. Delectus nemo cupiditate, itaque voluptate repellat aspernatur facere ab commodi id a sint vero. Ad reiciendis id animi repellat fugit aspernatur odit? Illo ut corrupti adipisci voluptatibus sed debitis quis cupiditate consectetur! Reiciendis, quae quo.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePost
