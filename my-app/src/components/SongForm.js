import React, { useState } from "react";

function SongForm({ addSongToList }) {
   const formInputFields = {
      id: "",
      songtitle: "",
      artist: "",
      genre: "",
      rating: "",
   };
   const [song, setSong] = useState(formInputFields);

   function onHandleChange(event) {
      const value = event.target.value;
      setSong({
         ...song,
         [event.target.name]: value,
      });
   }

   function onHandleSubmit(event) {
      event.preventDefault();
      addSongToList(song);
      setSong(formInputFields);
   }

   const musicGenreList = [
      "Genre",
      "Pop Music",
      "Hip Hop",
      "Hard Rock",
      "Elevator",
      "Apres Ski",
      "Heavy Metal",
      "Classical",
      "Bossa Nova",
   ];

   return (
      <div>
         <h2>Add your favorite songs:</h2>
         <div className="songform-container">
            <form onSubmit={onHandleSubmit}>
               <label className="songform-label">
                  <input
                     type="text"
                     placeholder="Song Title"
                     name="songtitle"
                     value={song.songtitle}
                     onChange={onHandleChange}
                  />
               </label>
               <br />
               <label className="songform-label">
                  <input type="text" placeholder="Artist" name="artist" value={song.artist} onChange={onHandleChange} />
               </label>
               <br />
               <select className="songform-label" name="genre" value={song.genre} onChange={onHandleChange}>
                  {musicGenreList.map((genreCategory) => (
                     <option key={genreCategory} value={genreCategory}>
                        {genreCategory}
                     </option>
                  ))}
               </select>
               <br />
               <select className="songform-label" name="rating" value={song.rating} onChange={onHandleChange}>
                  <option disabled selected value="">
                     Rate
                  </option>
                  <option value="1 star">1 star</option>
                  <option value="2 stars">2 stars</option>
                  <option value="3 stars">3 stars</option>
                  <option value="4 stars">4 stars</option>
                  <option value="5 stars">5 stars</option>
               </select>
               <br />
               <button className="add-button" type="submit">
                  Add This Song
               </button>
            </form>
         </div>
      </div>
   );
}
export default SongForm;
