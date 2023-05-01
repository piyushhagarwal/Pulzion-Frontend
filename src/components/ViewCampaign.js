import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import NgoContext from "../context/ngoContext";

export default function Campaign() {
  const params = useParams();
  const ngoId = params.id;

  const context = useContext(NgoContext);
  const { getNgos, ngo } = context;
  useEffect(() => {
    return () => {
      getNgos();
    };
  }, []);

  let selectedNgo = ngo.filter((singleNgo) => {
    return singleNgo._id === ngoId;
  });
  console.log(ngo);

  return (
    <div class="ag-courses_item col-sm-3">
      <a href={`/:${selectedNgo._id}`} class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">{selectedNgo[0].name}</div>
        <div class="ag-courses-item_desc">{selectedNgo[0].description}</div>

        <div class="ag-courses-item_date-box">
          Quantity :
          <span class="ag-courses-item_date">{` ${selectedNgo[0].quantity}`}</span>
        </div>
      </a>
    </div>
  );
}
