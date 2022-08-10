import React from "react";
import LikeButton from "./likeButton";
import "./blogPost.css";

const BlogPost = () => (
  <>
    <h2 className="blogTitle">I Reckon!</h2>
    <br />
    {/* this was made to have blog post to work around */}
    <p className="blogPost">
      {" "}
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae blanditiis
      quae, enim dicta soluta optio inventore sed ratione incidunt pariatur modi
      facere eaque placeat molestiae repudiandae tenetur dolore saepe
      reprehenderit? Nam iusto dolore sequi saepe et veniam. Voluptatem
      consequatur voluptas tenetur cupiditate a ipsum aliquam dignissimos,
      incidunt repellat earum optio ut aperiam impedit reiciendis pariatur
      similique rerum aspernatur. Labore, eaque. Temporibus obcaecati fugit vero
      libero perferendis incidunt voluptatum similique soluta eligendi iure illo
      quod debitis accusamus, ipsum ullam doloribus vitae totam eos et eius
      nihil quam, adipisci tempora? Veniam, velit? Neque at ut nostrum fugit
      recusandae hic porro sunt similique praesentium iure eos, officia
      voluptatibus sapiente libero, quasi voluptatum reiciendis explicabo
      eligendi quibusdam quia alias esse dolor magnam. Rerum, voluptatum? Sit
      animi aspernatur quisquam, tenetur non magni nesciunt sed accusamus dolore
      neque quas repellendus doloribus placeat optio adipisci ad itaque eveniet,
      reiciendis explicabo aperiam accusantium. Distinctio tempora natus unde
      maxime!
    </p>
    <LikeButton />
    {/* <div>
            <button onClick={Nope}>What in tarnation!&#x1f44e; {disLikeCount}</button>
            <button onClick={YeeHaw}>Purdy! &#128077; {likeCount}</button>
        </div> */}
  </>
);

export default BlogPost;
