import React from 'react';
import notFound from "../../assets/gifs/pageNotFoundPage/notFound.gif";

export default function PageNotFoundPage() {
  return (
    <section id="pageNotFound">
      <div className="bg-black w-screen h-screen overflow-hidden">
        <div className="m-auto w-1/2 h-1/2">
          <img
            className="object-cover object-center rounded"
            alt="notFound"
            src={notFound}
          />
        </div>
      </div>
    </section>
  )
}